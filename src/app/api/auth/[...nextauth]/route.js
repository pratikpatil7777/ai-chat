import NextAuth from '@auth/nextjs';
import AzureAD from '@auth/core/providers/azure-ad';
import Credentials from '@auth/core/providers/credentials';
import { JWT } from '@auth/core/jwt';
import { filterAzureTenant } from '@/lib/auth/tenantFilter';
import { getAzureConfig, verifyUserCredentials } from '@/lib/auth/server';

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  jwt: {
    maxAge: 60 * 60,
    async encode(params) {
      return JWT.encode(params);
    },
    async decode(params) {
      return JWT.decode(params);
    }
  },
  providers: [
    AzureAD({
      tenantId: process.env.AZURE_AD_TENANT_ID,
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email offline_access'
        }
      },
      async profile(profile, tokens) {
        return filterAzureTenant(profile, tokens);
      }
    }),
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: verifyUserCredentials
    })
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.roles = token.roles;
        session.user.tenantId = token.tenantId;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        const azureConfig = await getAzureConfig(user);
        token.roles = azureConfig.roles;
        token.tenantId = azureConfig.tenantId;
      }
      return token;
    }
  }
});

export { handler as GET, handler as POST };
