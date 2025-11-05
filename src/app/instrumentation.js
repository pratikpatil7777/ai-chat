import * as Sentry from '@sentry/nextjs';

export async function register() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN || '',
    tracesSampleRate: 0.2,
    integrations: [Sentry.replayIntegration()],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  });
}
