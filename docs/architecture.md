# Aperture Data Fabric – Architecture Overview

## Vision
Aperture is a modular SaaS AI data platform engineered for Fortune 100 tenants. The platform unifies data preparation, governance, analytics, and conversational intelligence behind a secure multi-tenant boundary. The solution is designed for Next.js App Router and prioritizes accessibility, performance, and composability.

## Capability Map
- **Auth & Identity** – Azure AD SSO via Auth.js, optional credentials fallback, role-based access, tenant scoping.
- **SaaS Operations** – Stripe-powered subscriptions, trials, seat management, usage enforcement, and onboarding persistence.
- **Chat with Data** – SSE streaming, attachments, pinned history, module-aware prompts, JSON viewer, governance badges.
- **Data Modules** – Filter, Cleanse, Visualize, Governance. Each module registers itself via manifest & feature flag toggles.
- **Data Observability** – Audit log, lineage visualizations, PII flagging, notifications surface.
- **Admin Fabric** – Tenant + user administration, plan configuration, metering dashboards.

## High-Level Architecture
```
┌──────────────────────────────────────────────┐
│                  Next.js App                 │
│  (Edge + Node runtimes, App Router)          │
├───────────────────────┬──────────────────────┤
│ Experience Layer      │ Serverless Layer     │
│ - shadcn/ui + Radix   │ - Auth.js Routes     │
│ - Tailwind Tokens     │ - Stripe Webhooks    │
│ - Redux Toolkit       │ - Data Service Proxy │
│ - RTK Query/SWR       │ - SSE streamers      │
├───────────────────────┼──────────────────────┤
│  Integrations         │ Observability        │
│  - Azure AD           │ - Sentry             │
│  - Stripe             │ - OpenTelemetry      │
│  - Data Lake APIs     │ - Structured Logs    │
└──────────────────────────────────────────────┘
```

## Directory Strategy
- `src/app` – App Router routes, API handlers, instrumentation.
- `src/components` – Headless UI wrappers (app shell, primitives, notifications).
- `src/features` – Domain slices (chat, modules, governance, payments, theme).
- `src/store` – Redux Toolkit store, slices, RTK Query services, session persistence middleware.
- `src/lib` – Integrations, hooks, constants, utilities.
- `src/tests` – Unit + component specs (Vitest/RTL) and Playwright e2e seeds.
- `docs` – Operational playbooks, architectural decisions, runbooks.

## State Management
- **Redux Toolkit** for deterministic UI state, session metadata, notifications.
- **RTK Query** for declarative server data access (modules, notifications, session).
- **Session Storage Middleware** ensures only non-sensitive UI data is persisted client-side and purged on logout.

## Authentication & Authorization
- Auth.js v5 configured with Azure AD OpenID Connect, enforcing tenant allow-list and JWT session strategy.
- Credentials fallback provider gated per tenant.
- JWT callback enriches tokens with roles + tenant context.
- Client store consumes session via `useGetSessionQuery` and enforces module-level feature flags.

## SaaS + Stripe
- Stripe SDK bootstrapped via `lib/stripe/client` with webhook handler scaffold for subscription lifecycle events.
- Onboarding steps persisted in Redux session slice + sessionStorage.
- Future tasks: implement billing portal, metered add-ons, credit usage sync.

## Chat with Data
- `features/chat` encapsulates history, composer, streaming viewer, and attachment dropzone.
- SSE endpoint (`/api/sse/chat`) streams typed events for tool responses; fallback to chunked fetch can be layered.
- JSON viewer renders structured responses; virtualization ready for long transcripts.

## Data Modules
- Modules list is delivered via API manifest. Each module folder (filter, cleanse, visualize, governance) will own:
  - `manifest.js` – metadata, feature flag key, permissions.
  - `routes` – server actions / API routes.
  - `components` – typed React building blocks.
  - `services` – RTK Query endpoints and adapters.

## UX Guidelines
- Desktop-first 3-pane shell with responsive breakpoint down to 768px.
- Centralized tokens in Tailwind config + CSS variables for theming.
- Composition-only components—no one-off styles. Use Radix primitives via shadcn patterns.
- Focus-visible outlines, keyboard navigation, ARIA labelling baked into primitives.

## Observability & Quality
- Sentry instrumentation registered via `app/instrumentation.js`.
- Future: wire OpenTelemetry SDK for traces/metrics to Azure Monitor or Datadog.
- Testing stack: Vitest (unit), React Testing Library (components), Playwright (e2e), Lighthouse CI (performance).
- GitHub Actions (to be added) will run lint, typecheck, tests, e2e, and accessibility scans.

## Security Baselines
- No sensitive data persisted client-side; middleware restricts sessionStorage to UI metadata.
- JWT rotation handled by Auth.js; integrate with key management (Azure Key Vault).
- CSP & security headers to be enforced in `next.config.js` / middleware.

## Next Steps
1. Implement real Azure AD + NextAuth callbacks with database persistence (PlanetScale/Postgres).
2. Hook Stripe webhooks to tenancy billing models and add admin management UIs.
3. Build data module engines (Filter/Cleanse/Visualize/Governance) with server connectors.
4. Expand chat orchestration with tool registry, queue management, and OpenAI/Azure OpenAI connectors.
5. Add CI pipeline, infrastructure-as-code (Terraform/Bicep) for Azure + Vercel deployment.
