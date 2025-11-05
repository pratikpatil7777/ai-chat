# Aperture Data Fabric (Scaffolding)

Enterprise-ready Next.js foundation for an AI data platform serving highly regulated enterprises.

## Getting Started

```bash
npm install
npm run dev
```

Key scripts:
- `npm run lint` – eslint with strict accessibility presets.
- `npm run test` – Vitest unit tests (placeholder).
- `npm run test:e2e` – Playwright e2e suite (to be implemented).
- `npm run typecheck` – TypeScript project references (for typed JS via JSDoc).

## Project Highlights
- **App Router & Edge ready**: App routes for Azure AD Auth.js, Stripe webhooks, SSE streaming.
- **Design System**: Tailwind CSS tokens, shadcn/ui-style primitives, theme toggle, three-pane productivity layout.
- **State Management**: Redux Toolkit + RTK Query with sessionStorage middleware respecting security requirements.
- **SaaS Infra Hooks**: Stripe client + webhook scaffolding, onboarding persistence, notifications surfaces.
- **Chat with Data**: Streaming viewer, attachments dropzone, history panel, SSE endpoint stub.
- **Observability**: Sentry instrumentation stub, placeholders for OpenTelemetry.

## Folder Map
- `src/app` – App Router pages and API routes.
- `src/components` – Layout primitives, UI building blocks.
- `src/features` – Domain-specific modules (chat, dashboard, profile, theme).
- `src/store` – Redux store, slices, middleware, RTK Query services.
- `src/lib` – Integrations (auth, stripe), hooks, utilities, constants.
- `docs/architecture.md` – Deep-dive on architectural decisions and roadmap.

## Next Steps
- Implement live Azure AD + multi-tenant persistence.
- Connect Stripe subscription events to tenant billing models.
- Flesh out data module engines and governance workflows.
- Add CI/CD pipelines (GitHub Actions) with lint/test/e2e/Lighthouse.
- Integrate accessibility and performance budgets.
