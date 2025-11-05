'use client';

import { useAppSelector } from '@/lib/hooks/useAppSelector';

function ProfileSummary() {
  const tenantId = useAppSelector((state) => state.auth.tenantId) ?? 'contoso';
  const roles = useAppSelector((state) => state.auth.roles) ?? ['analyst'];

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Organization</h2>
      <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-xs uppercase text-slate-400">Tenant</dt>
          <dd className="font-medium text-slate-800 dark:text-slate-200">{tenantId}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-slate-400">Roles</dt>
          <dd className="font-medium text-slate-800 dark:text-slate-200">{roles.join(', ')}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ProfileSummary;
