# Copilot Instructions for Yadakito Proto

## Project Overview

A React 19 + TypeScript + Vite component showcase application. The project demonstrates modern React development patterns with Mantine UI as the primary component library, TanStack Router for routing, and Tailwind CSS + PostCSS for styling.

## Architecture & Key Patterns

### Stack

- **Frontend**: React 19 with React Compiler enabled (Babel plugin for optimization)
- **Type System**: TypeScript ~5.9.3
- **Build Tool**: Vite 7 with HMR support
- **Component Library**: Mantine UI v8.3.6 (includes core, hooks, form, dates, charts, carousel, etc.)
- **Router**: TanStack Router v1.134.9 (file-based patterns not used; manual route definitions in `src/router.tsx`)
- **Icon Library**: Tabler Icons React v3.35.0
- **Styling**: Tailwind CSS 4 with Mantine PostCSS preset

### Directory Structure

```
src/
├── layouts/          # Root layout wrapping all pages
│   └── root-layout.tsx
├── pages/            # Page components (home, about, etc.)
│   ├── home.tsx
│   ├── about.tsx
│   ├── not-found.tsx
│   └── components/   # Component showcase pages
│       ├── button-showcase.tsx
│       └── alert-showcase.tsx
├── app.tsx           # App provider setup (MantineProvider, RouterProvider)
├── router.tsx        # Route definitions (manual tree construction)
├── main.tsx          # React entry point
└── index.css         # Global styles
```

### Routing Pattern

Routes are **manually defined** in `src/router.tsx` using TanStack Router's imperative API:

```typescript
const rootRoute = createRootRoute({ component: RootLayout });
const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home
});
// Routes added to tree and passed to createRouter
```

When adding new pages:

1. Create component in `src/pages/` or `src/pages/components/`
2. Define route in `router.tsx` using `createRoute()`
3. Add route to `routeTree` in `createRouter()`

### Styling Architecture

- **Tailwind CSS 4** with `@tailwindcss/postcss` plugin
- **Mantine UI** components prefer inline styles over Tailwind (see `root-layout.tsx` for pattern)
- **PostCSS preset**: `postcss-preset-mantine` provides Mantine design tokens as CSS variables
- **Breakpoints**: Managed via `postcss-simple-vars` (xs, sm, md, lg, xl) for Mantine-Tailwind alignment
- **Theme**: Custom Mantine theme in `app.tsx` with primary color `#0066cc` and color tuple generation
- **Global styles**: `src/index.css` imports Mantine core styles and Tailwind directives

### Component Patterns

- Showcase pages (e.g., `button-showcase.tsx`, `alert-showcase.tsx`) demonstrate Mantine component usage
- Use **Mantine layout components**: `Container`, `Stack`, `Group`, `Card`, `SimpleGrid` for responsive layouts
- Use **Tabler Icons** from `@tabler/icons-react` (e.g., `IconAlertCircle`, `IconBubble`, `IconCheck`)
- Use **TanStack Router's `Link`** component with render props for active state detection:
  ```typescript
  <Link to="/">
    {({ isActive }) => <Button variant={isActive ? "filled" : "subtle"}>Home</Button>}
  </Link>
  ```

## Development Workflow

### Commands

- **`npm run dev`** – Start Vite dev server with HMR (http://localhost:5173)
- **`npm run build`** – Build: `tsc -b` (type check) then `vite build` (production bundle)
- **`npm run lint`** – Run ESLint (configured in `eslint.config.js`)
- **`npm run preview`** – Preview production build locally

### React Compiler

The React Compiler is **enabled** via `babel-plugin-react-compiler` in `vite.config.ts`. This affects build performance—monitor for regressions if adding heavy components.

### Linting

ESLint uses **flat config** (`eslint.config.js`, not `.eslintrc`):

- Extends: `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh/vite`, Mantine config
- Ignores compiled JS/CJS files; checks `.ts` and `.tsx` only
- Use `npm run lint` to check; no auto-fix configured (run editor formatter)

## Conventions & Practices

### Commit Messages

Follow **Conventional Commits** (enforced in `CONTRIBUTING.md`):

- Format: `type(scope): subject` (e.g., `feat(pages): add component showcase grid`)
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`
- Scopes: `router`, `components`, `pages`, `layouts`, `styles`, `deps`, `config`
- Subject: imperative mood, no period, ≤50 chars

### Code Style

- **Inline styles** preferred in Mantine components over className (see `root-layout.tsx`)
- **CSS Variables**: Access Mantine colors via `var(--mantine-color-blue-6)` pattern
- **Type safety**: All `.tsx` files use React + TypeScript; avoid `any` type

### TypeScript Config

- `tsconfig.json` references `tsconfig.app.json` (app code) and `tsconfig.node.json` (build config)
- Build command: `tsc -b` compiles both projects in dependency order
- Strict mode not yet enabled (per README recommendation for production apps)

## Adding New Features

### New Component Showcase Page

1. Create `src/pages/components/{component-name}-showcase.tsx`
2. Import Mantine components + Tabler icons needed
3. Follow showcase pattern: title → description → Card-wrapped sections with variants
4. Add route in `router.tsx`:
   ```typescript
   const componentRoute = createRoute({
   	getParentRoute: () => rootRoute,
   	path: "/components/component-name",
   	component: ComponentShowcase
   });
   ```
5. Add to `routeTree` and home page card list
6. Commit: `feat(pages): add {component-name} showcase`

### New Regular Page

1. Create `src/pages/{page-name}.tsx` (use `Container`, `Stack`, Mantine layout primitives)
2. Add route in `router.tsx` following the pattern above
3. Update navigation in `root-layout.tsx` if needed

### Styling Updates

- Update `src/index.css` for global changes
- Modify `app.tsx` theme object for Mantine color/typography adjustments
- Use `tailwind.config.js` for Tailwind-specific customization (currently minimal)

## External Dependencies to Know

- **@mantine/core**: All UI components and hooks
- **@tanstack/react-router**: Routing with devtools (included in dev deps)
- **@tiptap/react**: Rich text editor (available but not yet used)
- **recharts**: Charting library (available via `@mantine/charts`)
- **dayjs**: Date utilities (available via `@mantine/dates`)

## Gotchas & Tips

1. **React Compiler**: Enabled globally; avoid patterns that break memoization if performance degrades
2. **Router type safety**: Must declare `module '@tanstack/react-router'` and `Register` interface for full IntelliSense
3. **Mantine breakpoints**: Use `cols={{ base: 1, sm: 2, lg: 3 }}` syntax in `SimpleGrid`, `Grid`, not Tailwind breakpoints
4. **Icons**: Tabler icons are lazy-loaded; all imported icons are tree-shakeable
5. **Build output**: TypeScript errors block build (`tsc -b` runs first); fix before `vite build` proceeds
