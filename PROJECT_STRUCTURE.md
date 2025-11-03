# Project Structure Guide

A visual guide to the refactored project structure for the Yadakito Proto application.

## Complete Directory Tree

```
yadakito-proto/
├── dist/                          # Production build output
├── src/
│   ├── config/                    # ⭐ Configuration layer (NEW)
│   │   ├── constants.ts          # App config, nav items, showcase data
│   │   └── theme.ts              # Mantine theme setup
│   │
│   ├── routes/                    # ⭐ Routing layer (NEW)
│   │   └── index.ts              # Central route definitions
│   │
│   ├── hooks/                     # ⭐ Custom hooks (NEW - extensible)
│   │   └── index.ts              # Export custom hooks
│   │
│   ├── components/                # ⭐ Reusable components (EXPANDED)
│   │   ├── Navigation.tsx        # Navigation bar component
│   │   └── ComponentShowcase.tsx  # Showcase page template
│   │
│   ├── layouts/                   # Layout components
│   │   └── root-layout.tsx       # Root layout wrapper
│   │
│   ├── pages/                     # Page components
│   │   ├── home.tsx
│   │   ├── about.tsx
│   │   ├── not-found.tsx
│   │   └── components/            # Component showcase pages
│   │       ├── button.tsx        # Button showcase
│   │       └── alert.tsx         # Alert showcase
│   │
│   ├── app.tsx                    # App provider setup
│   ├── router.tsx                 # Router initialization
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles
│
├── public/                        # Static assets
├── .stylelintrc.js               # Style linting config
├── eslint.config.js              # ESLint configuration
├── tailwind.config.js            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
├── vite.config.ts                # Vite build config
├── postcss.config.cjs            # PostCSS config
├── package.json                  # Dependencies
├── REFACTORING.md               # Detailed refactoring notes
├── GITHUB_PAGES_SETUP.md        # GitHub Pages setup
├── CONTRIBUTING.md              # Contributing guidelines
└── README.md                    # Project documentation
```

## Layer Architecture

### 1. **Config Layer** (`src/config/`)
Houses all application configuration

```
config/
├── theme.ts          # Mantine theme configuration
└── constants.ts      # App constants, navigation items, showcase data
```

**Usage**: Import centralized constants throughout the app
```typescript
import { APP_CONFIG, NAV_ITEMS } from "@/config/constants";
```

### 2. **Routes Layer** (`src/routes/`)
Manages all route definitions

```
routes/
└── index.ts          # Route tree construction
```

**Usage**: Import route tree in router
```typescript
import { routeTree } from "@/routes";
```

### 3. **Custom Hooks** (`src/hooks/`)
Reusable React hook logic (extensible)

```
hooks/
└── index.ts          # Export custom hooks
```

**Future**: Add custom hooks for common patterns
```typescript
export { useNavigation } from "./useNavigation";
export { useTheme } from "./useTheme";
```

### 4. **Components Layer** (`src/components/`)
Reusable, tested components

```
components/
├── Navigation.tsx        # Navigation bar
└── ComponentShowcase.tsx  # Showcase template
```

### 5. **Layouts Layer** (`src/layouts/`)
Page layout wrappers

```
layouts/
└── root-layout.tsx       # Root layout with Navigation
```

### 6. **Pages Layer** (`src/pages/`)
Page-level components

```
pages/
├── home.tsx
├── about.tsx
├── not-found.tsx
└── components/           # Showcase pages using template
    ├── button.tsx
    └── alert.tsx
```

## Data Flow

```
┌─────────────────────────────────────────────────────┐
│                   app.tsx                            │
│         (MantineProvider + RouterProvider)           │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │      router.tsx            │
        │  (Router initialization)   │
        └────────────┬───────────────┘
                     │
                     ▼
      ┌──────────────────────────────┐
      │  routes/index.ts             │
      │  (Route definitions & tree)  │
      └────────────┬─────────────────┘
                   │
                   ▼
         ┌─────────────────────────┐
         │  layouts/root-layout.tsx │
         │  (Uses Navigation comp)  │
         └────────────┬────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │  components/Navigation.tsx  │
        │ (Uses NAV_ITEMS from const) │
        └─────────────────────────────┘
                      │
                      ▼
         ┌──────────────────────────┐
         │   pages/ (routed pages)  │
         │  (Use ComponentShowcase) │
         └──────────────────────────┘


Configuration Cascade:
config/constants.ts  ←── Used by Navigation, pages, showcase
       ↓
config/theme.ts      ←── Used by app.tsx
       ↓
app.tsx              ←── Provides context
       ↓
All components access via imports
```

## Key Improvements

| Aspect | Before | After |
|--------|--------|-------|
| **Route Definition** | All in `router.tsx` | Centralized in `routes/index.ts` |
| **Configuration** | Scattered in files | `config/` directory |
| **Navigation Logic** | In `root-layout.tsx` | `components/Navigation.tsx` |
| **Theme Setup** | In `app.tsx` | `config/theme.ts` |
| **Showcase Pages** | Code duplication | `ComponentShowcase.tsx` template |
| **Constants** | Inline strings | `config/constants.ts` |
| **Hooks** | N/A | `hooks/` infrastructure |

## File Responsibilities

### Core Files

| File | Responsibility |
|------|-----------------|
| `src/app.tsx` | App providers and MantineProvider setup |
| `src/router.tsx` | Router initialization using route tree |
| `src/main.tsx` | React DOM render entry point |
| `src/index.css` | Global styles and Tailwind directives |

### Configuration

| File | Contains |
|------|----------|
| `src/config/constants.ts` | `APP_CONFIG`, `NAV_ITEMS`, `COMPONENT_SHOWCASE_ITEMS` |
| `src/config/theme.ts` | Mantine theme configuration |

### Routing

| File | Contains |
|------|----------|
| `src/routes/index.ts` | All route definitions and route tree |
| `src/router.tsx` | Router instance and type registration |

### Components

| File | Purpose |
|------|---------|
| `src/components/Navigation.tsx` | Reusable navigation bar |
| `src/components/ComponentShowcase.tsx` | Template for component showcase pages |

### Pages

| File | Route | Purpose |
|------|-------|---------|
| `src/pages/home.tsx` | `/` | Home page with showcase grid |
| `src/pages/about.tsx` | `/about` | About page |
| `src/pages/not-found.tsx` | `*` | 404 fallback |
| `src/pages/components/button.tsx` | `/components/button` | Button showcase |
| `src/pages/components/alert.tsx` | `/components/alert` | Alert showcase |

## Import Patterns

### Constants Usage
```typescript
import { APP_CONFIG, NAV_ITEMS, COMPONENT_SHOWCASE_ITEMS } from "@/config/constants";
```

### Theme Usage
```typescript
import { theme } from "@/config/theme";
```

### Routes Usage
```typescript
import { routeTree } from "@/routes";
```

### Components Usage
```typescript
import { Navigation } from "@/components/Navigation";
import { ComponentShowcase } from "@/components/ComponentShowcase";
```

## Scalability Patterns

### Adding New Routes

1. Create page component: `src/pages/my-page.tsx`
2. Add route in `src/routes/index.ts`
3. Update `src/config/constants.ts` NAV_ITEMS if needed

### Adding New Showcase Page

1. Create component: `src/pages/components/my-component.tsx`
2. Use `ComponentShowcase` template
3. Add route in `src/routes/index.ts`
4. Update `src/config/constants.ts` COMPONENT_SHOWCASE_ITEMS

### Adding Custom Hooks

1. Create hook: `src/hooks/useMyHook.ts`
2. Export from `src/hooks/index.ts`
3. Use in components

### Updating Configuration

1. Change values in `src/config/constants.ts` or `src/config/theme.ts`
2. All dependent components automatically use new values

## Benefits

✅ **Maintainability**: Clear separation of concerns  
✅ **Scalability**: Easy to add new routes, components, hooks  
✅ **Discoverability**: Clear file organization  
✅ **Reusability**: Shared components and templates  
✅ **Type Safety**: Full TypeScript support  
✅ **Configuration**: Centralized, easy to modify  
✅ **Performance**: Optimized with React Compiler  

## Future Enhancements

- [ ] Add path aliases in `tsconfig.json` (`@config`, `@hooks`, etc.)
- [ ] Create `src/utils/` for helper functions
- [ ] Add `src/types/` for shared TypeScript types
- [ ] Implement error boundaries
- [ ] Add Storybook for component documentation
- [ ] Create tests directory with jest/vitest setup
- [ ] Add a context provider directory for global state
- [ ] Create a services directory for API calls
