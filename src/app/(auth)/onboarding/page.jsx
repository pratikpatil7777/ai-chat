'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { persistOnboarding } from '@/store/slices/sessionSlice';
import AuthLayout from '@/components/layout/auth-layout';

const STEPS = ['tenant', 'plan', 'modules', 'tour'];

export default function OnboardingPage() {
  const [step, setStep] = useState('tenant');
  const dispatch = useAppDispatch();

  const goNext = () => {
    const currentIndex = STEPS.indexOf(step);
    const next = STEPS[currentIndex + 1];
    if (next) {
      setStep(next);
      dispatch(persistOnboarding({ onboardingStep: next, selectedPlanId: null }));
    }
  };

  return (
    <AuthLayout title="Finish onboarding">
      <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
        <p>Current step: {step}</p>
        <p className="text-xs uppercase tracking-wide text-slate-400">Progress</p>
        <ol className="space-y-2">
          {STEPS.map((item) => (
            <li key={item} className={item === step ? 'font-semibold text-brand-600' : ''}>
              {item}
            </li>
          ))}
        </ol>
        <Button onClick={goNext} className="w-full">
          Continue
        </Button>
      </div>
    </AuthLayout>
  );
}
