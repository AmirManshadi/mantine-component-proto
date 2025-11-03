# Copilot Instructions

Instructions for AI coding agents working on this project.

## Project Overview

A React 19 + TypeScript + Vite component showcase application demonstrating modern development patterns with Mantine UI, TanStack Router, Tailwind CSS, and PostCSS.

**Hub Files**:

- `src/routes/index.ts` - All route definitions
- `src/config/constants.ts` - Centralized config
- `src/components/ComponentShowcase.tsx` - DRY template

## Critical Architecture

### Data Flow

```
config/constants.ts (NAV_ITEMS, COMPONENT_SHOWCASE_ITEMS, APP_CONFIG)
  ↓
components/Navigation.tsx (builds nav from NAV_ITEMS)
  ↓
layouts/root-layout.tsx (wraps pages)
  ↓
pages/* (consume constants for content)
```

**Key pattern**: All navigation, routing metadata, and app config lives in **`src/config/constants.ts`**. Pages and components import from it—no hardcoding strings/paths.

### File Organization Hierarchy

```
src/
├── config/              ← CENTRALIZED CONFIG LAYER
│   ├── constants.ts     (APP_CONFIG, NAV_ITEMS, COMPONENT_SHOWCASE_ITEMS)
│   └── theme.ts         (Mantine theme)
├── routes/              ← ALL ROUTE DEFINITIONS (NOT router.tsx!)
│   └── index.ts         (rootRoute, homeRoute, buttonShowcaseRoute, etc. + routeTree)
├── components/          ← REUSABLE COMPONENTS
│   ├── Navigation.tsx   (uses NAV_ITEMS from constants)
│   └── ComponentShowcase.tsx (template: title, description, sections[])
├── layouts/
│   └── root-layout.tsx  (renders Navigation + Outlet)
├── pages/
│   ├── home.tsx         (uses COMPONENT_SHOWCASE_ITEMS, SimpleGrid layout)
│   ├── about.tsx
│   ├── not-found.tsx
│   └── components/      (showcase pages using ComponentShowcase template)
│       ├── button.tsx
│       └── alert.tsx
├── hooks/               (custom hooks placeholder)
├── app.tsx              (MantineProvider, RouterProvider)
├── router.tsx           (imports routeTree from routes/index.ts)
├── main.tsx             (ReactDOM.render App)
└── index.css            (global styles)
```

## Routing: TanStack Router Pattern

**Routes centralized in `src/routes/index.ts`** (not scattered in router.tsx):

```typescript
// src/routes/index.ts
export const rootRoute = createRootRoute({ component: RootLayout });
export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home
});
// ... more routes
export const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, ...]);
```

**`src/router.tsx`** imports and uses this:

```typescript
import { routeTree } from "./routes";
export const router = createRouter({
	routeTree,
	basepath: APP_CONFIG.basePath
});
```

**To add a new page:**

1. Create `src/pages/{name}.tsx`
2. Add route export in `src/routes/index.ts` (e.g., `export const myRoute = createRoute(...)`)
3. Add to `routeTree` children array
4. Update `NAV_ITEMS` in `src/config/constants.ts` if it's a main nav item

## Component Patterns

### ComponentShowcase Template (DRY for showcase pages)

```typescript
// src/components/ComponentShowcase.tsx
interface ComponentShowcaseProps {
	title: string;
	description: string;
	sections: Array<{ title: string; description?: string; children: ReactNode }>;
}
```

**Usage** (`src/pages/components/button.tsx`):

```typescript
<ComponentShowcase
  title="Button Component"
  description="Explore variants..."
  sections={[
    { title: "Basic", children: <Group><Button>...</Button></Group> },
    { title: "Variants", children: <Group>...</Group> }
  ]}
/>
```

### Navigation & Active State

```typescript
// components/Navigation.tsx
{NAV_ITEMS.map(item => (
  <Link key={item.path} to={item.path}>
    {({ isActive }) => <Button variant={isActive ? "filled" : "subtle"}>{item.label}</Button>}
  </Link>
))}
```

**Layout components used**: `Container`, `Stack`, `Group`, `Card`, `SimpleGrid` with `cols={{ base: 1, sm: 2, lg: 3 }}` (Mantine breakpoints, NOT Tailwind).

## Styling: Mantine + Tailwind Integration

- **Theme**: `src/config/theme.ts` defines Mantine theme
- **Inline styles preferred**: Mantine components use `style={}` or `p="md"` props, not `className`
- **CSS variables**: Access colors via `var(--mantine-color-{color}-{shade})` (e.g., `var(--mantine-color-blue-6)`)
- **PostCSS**: `postcss-preset-mantine` + `postcss-simple-vars` for token alignment
- **Tailwind**: `@tailwindcss/postcss` enabled; use sparingly (Mantine components don't need it)

## Development Commands

```bash
npm run dev          # Vite HMR dev server (http://localhost:5173)
npm run build        # tsc -b (type check) → vite build (bundle)
npm run lint         # ESLint flat config (eslint.config.js)
npm run preview      # Preview production build
```

**Build requirement**: `tsc -b` runs FIRST—TypeScript errors block Vite bundle. Fix types before build proceeds.

## Conventions

### Commit Messages (Conventional Commits)

- Format: `type(scope): subject`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`
- Scopes: `router`, `components`, `pages`, `layouts`, `styles`, `deps`, `config`
- Example: `feat(pages): add card showcase` or `fix(config): update nav items`

### Code Patterns

- **React Compiler**: Enabled (babel-plugin-react-compiler in vite.config.ts)—monitor perf with heavy components
- **Type safety**: Strict TypeScript; avoid `any`
- **Icons**: Tabler Icons (`@tabler/icons-react`)—tree-shakeable, imported as needed

## Key Dependencies & Gotchas

| Package                            | Use               | Gotcha                                                            |
| ---------------------------------- | ----------------- | ----------------------------------------------------------------- |
| `@mantine/core`                    | All UI components | Use Mantine breakpoints, not Tailwind, in components              |
| `@tanstack/react-router`           | Client routing    | Must declare `Register` interface in `router.tsx` for type safety |
| `@tabler/icons-react`              | Icons             | Tree-shakeable; import only what you use                          |
| `recharts` (via `@mantine/charts`) | Charts            | Available; not yet used in this project                           |
| `dayjs` (via `@mantine/dates`)     | Date utilities    | Available; not yet used                                           |
| `@tiptap/react`                    | Rich text         | Available; not yet used                                           |

**Critical gotchas:**

1. **Routes in `src/routes/index.ts`**, not scattered elsewhere
2. **Config in `src/config/constants.ts`** for single source of truth (NAV_ITEMS, paths, etc.)
3. **Inline styles for Mantine**, `style={}` prop preferred over `className`
4. **TypeScript errors block build**—check types before running `npm run build`

## Adding Features

### New Showcase Page

1. Create `src/pages/components/{name}.tsx` using `ComponentShowcase` template
2. Add route to `src/routes/index.ts`
3. Add metadata entry to `COMPONENT_SHOWCASE_ITEMS` in `src/config/constants.ts`
4. Commit: `feat(pages): add {name} showcase`

### New Regular Page

1. Create `src/pages/{name}.tsx`
2. Add route to `src/routes/index.ts`
3. Update `NAV_ITEMS` in `config/constants.ts` if it's main navigation
4. Commit: `feat(pages): add {name} page`

### Config/Theme Updates

- Colors/theme: Edit `src/config/theme.ts` (Mantine theme)
- App-wide constants: Edit `src/config/constants.ts` (APP_CONFIG, NAV_ITEMS, COMPONENT_SHOWCASE_ITEMS)
- Global CSS: Edit `src/index.css`

---

**TL;DR for agents:**

- Routes live in `src/routes/index.ts`
- Config/nav/paths in `src/config/constants.ts`
- Showcase pages use `ComponentShowcase` template (DRY)
- Commit with `type(scope): subject` format
- Type-check before building (`tsc -b` runs first)
