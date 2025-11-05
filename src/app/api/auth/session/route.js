export const runtime = 'edge';

export async function GET() {
  return Response.json({
    user: {
      id: 'demo-user',
      email: 'analyst@contoso.com',
      tenantId: 'contoso',
      roles: ['analyst']
    }
  });
}
