'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from '@auth/nextjs/client';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function run() {
      try {
        await signOut({ redirect: false });
      } finally {
        router.replace('/login');
      }
    }
    run();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-200">
      Signing out…
    </div>
  );
}
