# Architecture Diagram

## Refactored Project Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         YADAKITO PROTO                          │
│                    React 19 + Vite + Mantine                    │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│   main.tsx       │ Entry point - mounts App to DOM
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   app.tsx        │ Root component - providers
│                  │  • MantineProvider (uses config/theme.ts)
│                  │  • RouterProvider (uses router instance)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   router.tsx     │ Router initialization
│                  │  • Creates router with routeTree
│                  │  • From routes/index.ts
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ routes/index.ts  │ ⭐ All route definitions
│                  │  • rootRoute
│                  │  • homeRoute → Home
│                  │  • aboutRoute → About
│                  │  • componentRoutes (button, alert)
│                  │  • notFoundRoute
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────┐
│  layouts/root-layout.tsx         │ Root layout wrapper
│                                  │  • Uses Navigation component
│                                  │  • Renders Outlet for pages
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│ components/Navigation.tsx ⭐     │ Reusable nav component
│                                  │  • Uses NAV_ITEMS from constants
│                                  │  • Uses APP_CONFIG name
└──────────────────────────────────┘

         │
         ▼ (route-specific pages)
┌──────────────────────────────────┐
│         PAGES LAYER              │
├──────────────────────────────────┤
│ • pages/home.tsx                 │ → / (home page)
│ • pages/about.tsx                │ → /about
│ • pages/not-found.tsx            │ → * (404)
│ • pages/components/button.tsx    │ → /components/button
│ • pages/components/alert.tsx     │ → /components/alert
└──────────────────────────────────┘

Showcase pages use:
         │
         ▼
┌──────────────────────────────────┐
│ components/ComponentShowcase.tsx │ ⭐ Template component
│ (Reusable template)              │  • Eliminates duplication
│                                  │  • Used in 2+ pages
└──────────────────────────────────┘


═════════════════════════════════════════════════════════════════

CONFIG & DATA LAYER

┌──────────────────────────────────┐
│ config/constants.ts ⭐           │
│                                  │
│ Exports:                         │
│  • APP_CONFIG                    │ app name, paths, sizes
│  • NAV_ITEMS                     │ navigation menu items
│  • COMPONENT_SHOWCASE_ITEMS      │ showcase page metadata
│                                  │
│ Used by:                         │
│  • Navigation component          │
│  • Home page                     │
│  • Any page needing app config   │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ config/theme.ts ⭐              │
│                                  │
│ Exports:                         │
│  • theme (Mantine config)        │
│                                  │
│ Used by:                         │
│  • app.tsx (MantineProvider)     │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ hooks/index.ts ⭐ (Infrastructure)│
│                                  │
│ Location for:                    │
│  • Custom React hooks            │
│  • Reusable logic                │
│                                  │
│ Currently: placeholder for future│
└──────────────────────────────────┘


═════════════════════════════════════════════════════════════════

DATA FLOW - EXAMPLE

┌─────────────────────────────────────────────────────┐
│ Navigation Component needs items                    │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼ imports
        ┌───────────────────────┐
        │ config/constants.ts   │
        │ NAV_ITEMS = [         │
        │  { label, path }...   │
        │ ]                     │
        └───────┬───────────────┘
                │
                ▼ consumes
        ┌───────────────────────┐
        │ components/           │
        │ Navigation.tsx        │
        │                       │
        │ .map(NAV_ITEMS) →     │
        │  create Link buttons  │
        └───────────────────────┘
                │
                ▼ renders in
        ┌───────────────────────┐
        │ layouts/              │
        │ root-layout.tsx       │
        └───────────────────────┘


═════════════════════════════════════════════════════════════════

COMPONENT HIERARCHY

App (root)
│
├── MantineProvider
│   └── RouterProvider
│       └── RootRoute
│           └── RootLayout
│               ├── Navigation (reusable)
│               │   └── Links (uses NAV_ITEMS from constants)
│               │
│               └── main (Outlet)
│                   └── [Route-specific Page]
│                       ├── Home
│                       │   └── Shows grid of COMPONENT_SHOWCASE_ITEMS
│                       │
│                       ├── About
│                       │
│                       ├── Button Showcase
│                       │   └── ComponentShowcase (template)
│                       │       └── Sections
│                       │
│                       ├── Alert Showcase
│                       │   └── ComponentShowcase (template)
│                       │       └── Sections
│                       │
│                       └── NotFound (404)


═════════════════════════════════════════════════════════════════

FILE ORGANIZATION

src/
├── config/              ⭐ Configuration Layer
│   ├── constants.ts     Central constants & config
│   └── theme.ts        Mantine theme setup
│
├── routes/              ⭐ Route Definitions
│   └── index.ts        All routes & route tree
│
├── hooks/               ⭐ Custom Hooks (Extensible)
│   └── index.ts        Export hooks
│
├── components/          ⭐ Reusable Components
│   ├── Navigation.tsx   Nav bar component
│   └── ComponentShowcase.tsx Showcase template
│
├── layouts/             Layout Wrappers
│   └── root-layout.tsx  Root layout
│
├── pages/               Page Components
│   ├── home.tsx
│   ├── about.tsx
│   ├── not-found.tsx
│   └── components/      Component showcase pages
│       ├── button.tsx   (uses ComponentShowcase)
│       └── alert.tsx    (uses ComponentShowcase)
│
├── app.tsx              App providers
├── router.tsx           Router initialization
├── main.tsx             Entry point
└── index.css            Global styles


═════════════════════════════════════════════════════════════════

DEPENDENCY GRAPH

┌─────────────────────┐
│  src/index.css      │
│  (Global styles)    │
└─────────────────────┘

┌─────────────────────┐
│  src/main.tsx       │
│  ↓                  │
│  App Component ←────┤
└─────────────────────┘
         │
         ├─→ src/app.tsx
         │    ├─→ config/theme.ts
         │    └─→ router.tsx
         │         ├─→ routes/index.ts
         │         │    ├─→ layouts/root-layout.tsx
         │         │    │    ├─→ components/Navigation.tsx
         │         │    │    │    └─→ config/constants.ts
         │         │    │    └─→ pages/* (routed components)
         │         │    │         ├─→ home.tsx
         │         │    │         │    └─→ config/constants.ts
         │         │    │         ├─→ components/ComponentShowcase.tsx
         │         │    │         └─→ config/constants.ts
         │         │    └─→ config/constants.ts
         │         └─→ config/constants.ts
         │
         └─→ Mantine + React + TanStack Router


═════════════════════════════════════════════════════════════════

IMPROVEMENTS AT A GLANCE

Before                          After
──────────────────────────────────────────────────────
Routes in router.tsx      →  Routes in routes/index.ts
Config scattered          →  config/ directory
Nav in layout             →  components/Navigation.tsx
Theme in app.tsx          →  config/theme.ts
Duped showcase code       →  ComponentShowcase template
No hooks location         →  hooks/ directory
Hard to find things       →  Clear organization
70+ lines showcase.tsx    →  20 lines (with template)

═════════════════════════════════════════════════════════════════
```

## Key Takeaways

1. **Layered Architecture**: Config → Routes → Components → Pages
2. **Single Responsibility**: Each file has one clear purpose
3. **DRY Principle**: Reusable components and templates eliminate duplication
4. **Scalability**: Easy to add new routes, pages, and features
5. **Maintainability**: Clear structure and organization
6. **Type Safety**: Full TypeScript support throughout

---

**This architecture supports**:
- ✅ Adding new routes easily
- ✅ Creating new showcase pages with template
- ✅ Centralizing configuration
- ✅ Reusing components
- ✅ Scaling the project
- ✅ Team collaboration
