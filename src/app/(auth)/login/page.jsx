'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/components/layout/auth-layout';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (values) => {
    console.log('login', values);
  };

  return (
    <AuthLayout title="Sign in to Aperture">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <Input type="email" autoComplete="email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <Input type="password" autoComplete="current-password" {...register('password')} />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
      <div className="pt-6 text-sm text-slate-500">
        <p>SSO enabled tenants can <Link href="/api/auth/signin/azure-ad">sign in with Microsoft</Link>.</p>
      </div>
    </AuthLayout>
  );
}
