'use client';

import AppShell from '@/components/layout/app-shell';
import ProfileSummary from '@/features/profile/components/profileSummary';
import BillingOverview from '@/features/profile/components/billingOverview';
import ProfileContextPanel from '@/features/profile/components/profileContextPanel';

export default function ProfilePage() {
  const primaryPanel = (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Profile & Usage</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Manage organization roles, governance controls, and billing access.
        </p>
      </header>
      <ProfileSummary />
      <BillingOverview />
    </div>
  );

  return <AppShell contextPanel={<ProfileContextPanel />} primaryPanel={primaryPanel} />;
}
