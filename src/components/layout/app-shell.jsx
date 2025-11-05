'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useAppSelector } from '@/lib/hooks/useAppSelector';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { setActiveDock } from '@/store/slices/uiSlice';
import { cn } from '@/lib/utils/cn';

const DOCK_ITEMS = [
  { id: 'chat-assist', label: 'ChatAssist', href: '/chat-assist', icon: '💬' },
  { id: 'home', label: 'Home', href: '/home', icon: '🏠' },
  { id: 'profile', label: 'Profile', href: '/profile', icon: '👤' },
  { id: 'logout', label: 'Logout', href: '/logout', icon: '⏻' }
];

function AppShell({ contextPanel, primaryPanel }) {
  const dispatch = useAppDispatch();
  const activeDock = useAppSelector((state) => state.ui.activeDock);

  const items = useMemo(
    () =>
      DOCK_ITEMS.map((item) => ({
        ...item,
        isActive: item.id === activeDock
      })),
    [activeDock]
  );

  return (
    <div className="grid min-h-screen grid-cols-[72px_360px_1fr] bg-[rgb(var(--color-bg-secondary))] text-slate-900 dark:text-slate-100 max-lg:grid-cols-[60px_1fr]">
      <nav className="pane-transition hidden flex-col items-center gap-4 border-r border-white/10 bg-white/80 px-2 py-6 backdrop-blur dark:bg-slate-950/80 lg:flex">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-brand-200 dark:hover:bg-brand-700',
              item.isActive && 'bg-brand-500 text-white hover:bg-brand-500'
            )}
            aria-label={item.label}
            onClick={() => dispatch(setActiveDock(item.id))}
          >
            <span aria-hidden>{item.icon}</span>
          </Link>
        ))}
      </nav>
      <aside className="pane-transition hidden border-r border-white/10 bg-white/60 p-6 dark:bg-slate-900/80 lg:block">
        {contextPanel}
      </aside>
      <main className="pane-transition overflow-y-auto bg-white/95 p-6 dark:bg-slate-900/95">
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            {items
              .filter((item) => item.id !== 'logout')
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition dark:border-slate-700 dark:bg-slate-900',
                    item.isActive && 'border-brand-500 text-brand-600'
                  )}
                  aria-label={item.label}
                  onClick={() => dispatch(setActiveDock(item.id))}
                >
                  <span aria-hidden>{item.icon}</span>
                </Link>
              ))}
          </div>
          <Link
            href="/logout"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-red-500 transition hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/40"
            aria-label="Logout"
          >
            ⏻
          </Link>
        </div>
        <div className="mb-6 lg:hidden">{contextPanel}</div>
        {primaryPanel}
      </main>
    </div>
  );
}

export default AppShell;
