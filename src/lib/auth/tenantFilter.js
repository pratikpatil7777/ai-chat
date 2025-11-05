export function filterAzureTenant(profile, tokens) {
  const allowedTenants = (process.env.AZURE_AD_ALLOWED_TENANTS ?? '').split(',').filter(Boolean);
  if (allowedTenants.length && !allowedTenants.includes(tokens.idTokenClaims.tid)) {
    throw new Error('Tenant not authorized');
  }
  return {
    id: profile.sub,
    name: profile.name,
    email: profile.email,
    tenantId: tokens.idTokenClaims.tid,
    roles: tokens.idTokenClaims.roles ?? []
  };
}
