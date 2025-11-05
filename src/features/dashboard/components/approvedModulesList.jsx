'use client';

import { useGetModulesQuery } from '@/store/services/api';
import { Button } from '@/components/ui/button';

function ApprovedModulesList() {
  const { data, isLoading } = useGetModulesQuery();
  const modules = data?.items ?? [
    { id: 'filter', name: 'Filter', description: 'Advanced column + predicate filtering' },
    { id: 'cleanse', name: 'Cleanse', description: 'Deduplicate, normalize, and audit data' },
    { id: 'visualize', name: 'Visualize', description: 'Build dashboards and export insights' }
  ];

  return (
    <div className="space-y-4">
      {isLoading && <p className="text-sm text-slate-500">Loading modules…</p>}
      {modules.map((module) => (
        <div
          key={module.id}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{module.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{module.description}</p>
            </div>
            <Button variant="secondary">Launch</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprovedModulesList;
