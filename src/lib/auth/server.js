export async function getAzureConfig(user) {
  return {
    roles: user.roles ?? ['viewer'],
    tenantId: user.tenantId ?? process.env.AZURE_AD_TENANT_ID
  };
}

export async function verifyUserCredentials(credentials) {
  if (!credentials?.email || !credentials?.password) {
    throw new Error('Missing credentials');
  }
  // TODO: integrate with secure identity provider
  return {
    id: credentials.email,
    email: credentials.email,
    roles: ['viewer'],
    tenantId: 'fallback-tenant'
  };
}
