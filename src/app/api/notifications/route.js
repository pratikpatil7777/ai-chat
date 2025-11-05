export const runtime = 'edge';

const notifications = [
  { id: '1', title: 'Data cleanse completed', type: 'success', time: new Date().toISOString() },
  { id: '2', title: 'Billing threshold reached', type: 'warning', time: new Date().toISOString() }
];

export async function GET() {
  return Response.json({ items: notifications });
}
