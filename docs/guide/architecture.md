# Architecture Guide

Visual and detailed guide to the system architecture of Yadakito Proto.

## System Overview

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
```

## Configuration & Data Layer

```
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
```

## Data Flow Example

```
Navigation Component needs items
         │
         ▼ imports
┌──────────────────────┐
│ config/constants.ts  │
│ NAV_ITEMS = [        │
│  { label, path }...  │
│ ]                    │
└──────────┬───────────┘
           │
           ▼ consumes
┌──────────────────────┐
│ components/          │
│ Navigation.tsx       │
│                      │
│ .map(NAV_ITEMS) →    │
│  create Link buttons │
└──────────┬───────────┘
           │
           ▼ renders in
┌──────────────────────┐
│ layouts/             │
│ root-layout.tsx      │
└──────────────────────┘
```

## Component Hierarchy

```
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
```

## Dependency Graph

```
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
```

## Request Lifecycle

### Page Navigation Flow

```
User clicks Link
         │
         ▼
TanStack Router
         │
         ▼
Match route from routes/index.ts
         │
         ▼
Load component (e.g., ButtonShowcase)
         │
         ▼
Render component with RootLayout
         │
         ▼
RootLayout renders Navigation
         │
         ▼
Navigation renders from NAV_ITEMS
         │
         ▼
Page renders in <Outlet />
         │
         ▼
Component displays on screen
```

### Configuration Update Flow

```
Edit config/constants.ts
         │
         ▼
Save file
         │
         ▼
Hot reload (dev mode)
         │
         ▼
Components import new constants
         │
         ▼
Re-render with new values
         │
         ▼
UI updates automatically
```

## File Organization

```
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
```

## Architecture Improvements

```
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
```

## Key Principles

1. **Layered Architecture**: Config → Routes → Components → Pages
2. **Single Responsibility**: Each file has one clear purpose
3. **DRY Principle**: Reusable components and templates eliminate duplication
4. **Scalability**: Easy to add new routes, pages, and features
5. **Maintainability**: Clear structure and organization
6. **Type Safety**: Full TypeScript support throughout

## Data Flow Patterns

### Config-Driven UI
Configuration changes cascade through components:
- Update `config/constants.ts`
- All components using those constants re-render
- No need to modify components themselves

### Route-Based Rendering
Each route determines which component renders:
- Routes in `routes/index.ts` map paths to components
- Layout wraps all routes
- Navigation uses route metadata from config

### Template-Based Pages
Showcase pages follow a consistent template:
- Use `ComponentShowcase` wrapper
- Define sections with title, description, children
- Template handles styling and structure

## Performance Considerations

- **React Compiler**: Enabled for automatic optimization
- **Code Splitting**: Vite handles automatic route chunking
- **Tree Shaking**: Unused code is removed from bundle
- **Mantine UI**: Only used components are included
- **Tabler Icons**: Tree-shakeable imports only

## Extensibility Points

| Area | How to Extend |
|------|---------------|
| **Routes** | Add to `routes/index.ts` |
| **Navigation** | Update `NAV_ITEMS` in constants |
| **Configuration** | Modify `config/constants.ts` or `config/theme.ts` |
| **Hooks** | Create in `src/hooks/` and export from index |
| **Components** | Add to `src/components/` |
| **Pages** | Create in `src/pages/` |
| **Styling** | Update `src/index.css` or theme |

## Design Decisions

### Why Routes in routes/index.ts?
- Centralized: Single source of truth for all routes
- Scalable: Easy to add/remove routes
- Organized: Clear route structure at a glance
- Typed: Full TypeScript support for route definitions

### Why Config Layer?
- DRY: No hardcoded strings throughout app
- Maintainable: Change config in one place
- Scalable: Easy to add new configuration
- Clear: Obvious where to look for settings

### Why ComponentShowcase Template?
- DRY: Eliminates boilerplate code
- Consistent: All showcase pages have same structure
- Maintainable: Update template = update all showcases
- Scalable: Easy to add new showcase pages

### Why Separate Layouts?
- Composition: Layouts wrap pages cleanly
- Reusable: Same layout for multiple pages
- Testable: Layout logic separate from pages
- Clear: Obvious where layout logic lives
