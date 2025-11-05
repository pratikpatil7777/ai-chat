'use client';

import AppShell from '@/components/layout/app-shell';
import { Button } from '@/components/ui/button';
import HomeContextPanel from '@/features/dashboard/components/homeContextPanel';
import ApprovedModulesList from '@/features/dashboard/components/approvedModulesList';
import ThemeToggle from '@/features/theme/components/themeToggle';

export default function HomePage() {
  const primaryPanel = (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Workspace</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Continue where you left off or explore new data automations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>
      <div className="flex flex-wrap gap-2">
        <Button>New Project</Button>
        <Button variant="secondary">Upload dataset</Button>
        <Button variant="ghost">View audit log</Button>
      </div>
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Approved modules</h2>
        <ApprovedModulesList />
      </section>
    </div>
  );

  return <AppShell contextPanel={<HomeContextPanel />} primaryPanel={primaryPanel} />;
}
