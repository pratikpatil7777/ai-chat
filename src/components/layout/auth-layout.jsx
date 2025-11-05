'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

function AuthLayout({ title, children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-slate-900 dark:via-slate-950 dark:to-brand-900">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-semibold text-brand-700 dark:text-brand-300">Aperture</div>
        <Button asChild variant="ghost">
          <Link href="/signup">Start trial</Link>
        </Button>
      </header>
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{title}</h1>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
