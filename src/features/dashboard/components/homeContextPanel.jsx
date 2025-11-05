'use client';

import { useGetNotificationsQuery } from '@/store/services/api';

function HomeContextPanel() {
  const { data } = useGetNotificationsQuery();
  const notifications = data?.items ?? [
    { id: '1', title: 'Data cleanse completed', time: '2m ago' },
    { id: '2', title: 'New governance policy applied', time: '15m ago' }
  ];

  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Activity</h2>
      <ul className="space-y-3 text-sm">
        {notifications.map((notification) => (
          <li key={notification.id} className="rounded-lg bg-white/70 p-3 shadow-sm dark:bg-slate-900/70">
            <p className="font-medium text-slate-700 dark:text-slate-100">{notification.title}</p>
            <p className="text-xs uppercase text-slate-400">{notification.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeContextPanel;
