'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils/cn';

export const Button = forwardRef(function Button({ className, variant = 'primary', asChild = false, ...props }, ref) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-60';

  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 dark:bg-brand-400 dark:hover:bg-brand-300',
    secondary:
      'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
    ghost: 'text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800'
  };

  const Comp = asChild ? Slot : 'button';
  return <Comp ref={ref} className={cn(base, variants[variant], className)} {...props} />;
});
