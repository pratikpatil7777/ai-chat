'use client';

import { Button } from '@/components/ui/button';

function BillingOverview() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Billing</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage seats, usage limits, and invoices.</p>
        </div>
        <Button variant="secondary">Open Stripe portal</Button>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-xs uppercase text-slate-400">Plan</dt>
          <dd className="font-medium text-slate-800 dark:text-slate-200">Enterprise AI Suite</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-slate-400">Usage</dt>
          <dd className="font-medium text-slate-800 dark:text-slate-200">65% of monthly credits</dd>
        </div>
      </dl>
    </section>
  );
}

export default BillingOverview;
