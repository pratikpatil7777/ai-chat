'use client';

function ProfileContextPanel() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Usage metrics</h2>
      <div className="rounded-xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <p className="text-slate-600 dark:text-slate-300">Streaming tokens consumed this month</p>
        <p className="mt-2 text-3xl font-semibold text-brand-600 dark:text-brand-300">812k</p>
        <p className="text-xs text-slate-400">Remaining credits reset in 5 days</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <p className="text-slate-600 dark:text-slate-300">Seats</p>
        <p className="mt-2 text-3xl font-semibold text-brand-600 dark:text-brand-300">42 / 60</p>
        <p className="text-xs text-slate-400">Add more seats from billing</p>
      </div>
    </div>
  );
}

export default ProfileContextPanel;
