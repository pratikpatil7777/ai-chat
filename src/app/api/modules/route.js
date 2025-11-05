export const runtime = 'edge';

const modules = [
  {
    id: 'filter',
    name: 'Filter',
    description: 'Column filters, predicate builder, preview diffs',
    featureFlag: 'modules.filter'
  },
  {
    id: 'cleanse',
    name: 'Cleanse',
    description: 'Type inference, null handling, dedupe, audit log',
    featureFlag: 'modules.cleanse'
  },
  {
    id: 'visualize',
    name: 'Visualize',
    description: 'Dashboards, charting, export PNG/CSV',
    featureFlag: 'modules.visualize'
  },
  {
    id: 'governance',
    name: 'Governance',
    description: 'PII detection, lineage, role-based access, audit trails',
    featureFlag: 'modules.governance'
  }
];

export async function GET() {
  return Response.json({ items: modules });
}
