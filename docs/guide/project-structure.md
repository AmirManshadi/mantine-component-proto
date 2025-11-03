# Project Structure Guide

A comprehensive guide to the refactored project structure of Yadakito Proto.

## Directory Organization

```
yadakito-proto/
├── dist/                          # Production build output
├── docs/                          # Documentation
│   ├── guide/                     # User guides
│   ├── reference/                 # Reference documentation
│   └── developer/                 # Developer guides
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
├── .github/                       # GitHub configuration
│   ├── workflows/                # CI/CD workflows
│   └── copilot-instructions.md   # AI agent instructions
├── eslint.config.js              # ESLint configuration
├── tailwind.config.js            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
├── vite.config.ts                # Vite build config
├── postcss.config.cjs            # PostCSS config
├── package.json                  # Dependencies
└── README.md                     # Project documentation
```

## Layer Architecture

### 1. Config Layer (`src/config/`)
Houses all application configuration and centralized constants.

**Files:**
- `constants.ts` - Application constants, navigation items, showcase metadata
- `theme.ts` - Mantine theme configuration

**Usage:**
```typescript
import { APP_CONFIG, NAV_ITEMS, COMPONENT_SHOWCASE_ITEMS } from "@/config/constants";
import { theme } from "@/config/theme";
```

### 2. Routes Layer (`src/routes/`)
Manages all route definitions in one place.

**Files:**
- `index.ts` - Route tree construction with all route definitions

**Usage:**
```typescript
import { routeTree } from "@/routes";
```

### 3. Custom Hooks (`src/hooks/`)
Reusable React hook logic (extensible for future use).

**Files:**
- `index.ts` - Export all custom hooks

**Future usage:**
```typescript
export { useNavigation } from "./useNavigation";
export { useTheme } from "./useTheme";
```

### 4. Components Layer (`src/components/`)
Reusable, tested components.

**Files:**
- `Navigation.tsx` - Navigation bar component
- `ComponentShowcase.tsx` - Showcase template component

**Usage:**
```typescript
import { Navigation } from "@/components/Navigation";
import { ComponentShowcase } from "@/components/ComponentShowcase";
```

### 5. Layouts Layer (`src/layouts/`)
Page layout wrappers.

**Files:**
- `root-layout.tsx` - Root layout with Navigation

**Usage:**
```typescript
import RootLayout from "@/layouts/root-layout";
```

### 6. Pages Layer (`src/pages/`)
Page-level components.

**Files:**
- `home.tsx` - Home page
- `about.tsx` - About page
- `not-found.tsx` - 404 page
- `components/` - Showcase pages
  - `button.tsx` - Button showcase
  - `alert.tsx` - Alert showcase

## Data Flow Diagram

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

Configuration Flow:
config/constants.ts  ←── Used by Navigation, pages, showcase
       ↓
config/theme.ts      ←── Used by app.tsx
       ↓
app.tsx              ←── Provides context
       ↓
All components access via imports
```

## File Responsibilities

### Core Files

| File             | Responsibility                          |
| ---------------- | --------------------------------------- |
| `src/app.tsx`    | App providers and MantineProvider setup |
| `src/router.tsx` | Router initialization using route tree  |
| `src/main.tsx`   | React DOM render entry point            |
| `src/index.css`  | Global styles and Tailwind directives   |

### Configuration Files

| File                      | Contains                                              |
| ------------------------- | ----------------------------------------------------- |
| `src/config/constants.ts` | `APP_CONFIG`, `NAV_ITEMS`, `COMPONENT_SHOWCASE_ITEMS` |
| `src/config/theme.ts`     | Mantine theme configuration                           |

### Routing Files

| File                  | Contains                              |
| --------------------- | ------------------------------------- |
| `src/routes/index.ts` | All route definitions and route tree  |
| `src/router.tsx`      | Router instance and type registration |

### Component Files

| File                                   | Purpose                               |
| -------------------------------------- | ------------------------------------- |
| `src/components/Navigation.tsx`        | Reusable navigation bar               |
| `src/components/ComponentShowcase.tsx` | Template for component showcase pages |

### Page Files

| File                              | Route                | Purpose                      |
| --------------------------------- | -------------------- | ---------------------------- |
| `src/pages/home.tsx`              | `/`                  | Home page with showcase grid |
| `src/pages/about.tsx`             | `/about`             | About page                   |
| `src/pages/not-found.tsx`         | `*`                  | 404 fallback                 |
| `src/pages/components/button.tsx` | `/components/button` | Button showcase              |
| `src/pages/components/alert.tsx`  | `/components/alert`  | Alert showcase               |

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
4. Commit: `feat(pages): add my-page`

### Adding New Showcase Page

1. Create component: `src/pages/components/my-component.tsx`
2. Use `ComponentShowcase` template
3. Add route in `src/routes/index.ts`
4. Update `src/config/constants.ts` COMPONENT_SHOWCASE_ITEMS
5. Commit: `feat(pages): add my-component showcase`

### Adding Custom Hooks

1. Create hook: `src/hooks/useMyHook.ts`
2. Export from `src/hooks/index.ts`
3. Use in components
4. Commit: `feat(hooks): add useMyHook`

### Updating Configuration

1. Change values in `src/config/constants.ts` or `src/config/theme.ts`
2. All dependent components automatically use new values
3. No need to update components!

## Key Improvements

| Aspect               | Before               | After                            |
| -------------------- | -------------------- | -------------------------------- |
| **Route Definition** | All in `router.tsx`  | Centralized in `routes/index.ts` |
| **Configuration**    | Scattered in files   | `config/` directory              |
| **Navigation Logic** | In `root-layout.tsx` | `components/Navigation.tsx`      |
| **Theme Setup**      | In `app.tsx`         | `config/theme.ts`                |
| **Showcase Pages**   | Code duplication     | `ComponentShowcase.tsx` template |
| **Constants**        | Inline strings       | `config/constants.ts`            |
| **Hooks**            | N/A                  | `hooks/` infrastructure          |

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
