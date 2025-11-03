# Reference Documentation

Technical reference for Yadakito Proto project.

## Table of Contents

- [API Reference](#api-reference)
- [Configuration Reference](#configuration-reference)
- [Styling Reference](#styling-reference)
- [Dependencies Reference](#dependencies-reference)
- [Commands Reference](#commands-reference)

## API Reference

### ComponentShowcase

Template component for creating consistent component showcase pages.

**Location**: `src/components/ComponentShowcase.tsx`

**Props**:
```typescript
interface ComponentShowcaseProps {
  title: string;              // Page title
  description: string;        // Page description
  sections: Section[];        // Array of showcase sections
}

interface Section {
  title: string;              // Section title
  description?: string;       // Optional section description
  children: ReactNode;        // Section content (JSX)
}
```

**Example**:
```typescript
import { ComponentShowcase } from "@/components/ComponentShowcase";
import { Button, Group } from "@mantine/core";

export default function ButtonShowcase() {
  return (
    <ComponentShowcase
      title="Button Component"
      description="Explore button variants and sizes"
      sections={[
        {
          title: "Basic",
          children: <Group><Button>Click Me</Button></Group>
        },
        {
          title: "Variants",
          description: "Different button styles",
          children: (
            <Group>
              <Button variant="filled">Filled</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="subtle">Subtle</Button>
            </Group>
          )
        }
      ]}
    />
  );
}
```

### Navigation

Reusable navigation component.

**Location**: `src/components/Navigation.tsx`

**Dependencies**:
- Automatically uses `NAV_ITEMS` from `config/constants.ts`
- Automatically uses `APP_CONFIG` from `config/constants.ts`

**Features**:
- Active route highlighting
- Responsive navigation
- Built with Mantine UI

## Configuration Reference

### APP_CONFIG

Application-wide configuration object.

**Location**: `src/config/constants.ts`

**Properties**:
```typescript
const APP_CONFIG = {
  name: string;              // Application name
  basePath: string;          // Base path for GitHub Pages
  containerSize: "xs" | "sm" | "md" | "lg" | "xl";  // Default container size
  navHeight: "xs" | "sm" | "md" | "lg" | "xl";      // Navigation height
} as const;
```

**Current Value**:
```typescript
{
  name: "Yadakito Proto",
  basePath: "/mantine-component-proto",
  containerSize: "lg",
  navHeight: "md"
}
```

### NAV_ITEMS

Navigation menu items array.

**Location**: `src/config/constants.ts`

**Type**:
```typescript
const NAV_ITEMS = Array<{
  label: string;    // Display label
  path: string;     // Route path
}>;
```

**Current Value**:
```typescript
[
  { label: "Home", path: "/" },
  { label: "About", path: "/about" }
]
```

### COMPONENT_SHOWCASE_ITEMS

Metadata for component showcase pages.

**Location**: `src/config/constants.ts`

**Type**:
```typescript
const COMPONENT_SHOWCASE_ITEMS = Array<{
  name: string;                        // Component name
  description: string;                 // Short description
  path: string;                        // Route path
  icon: IconComponent;                 // Tabler icon component
  color: MantineColor;                 // Badge color
}>;
```

**Current Value**:
```typescript
[
  {
    name: "Button",
    description: "Interactive button component with multiple variants and sizes",
    path: "/components/button",
    icon: IconBubble,
    color: "blue"
  },
  {
    name: "Alert",
    description: "Alert component for displaying messages and notifications",
    path: "/components/alert",
    icon: IconAlertCircle,
    color: "red"
  }
]
```

## Styling Reference

### Theme Configuration

**Location**: `src/config/theme.ts`

**Primary Color**: `#0066cc` (Blue)

**Usage**:
```typescript
import { theme } from "@/config/theme";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* App content */}
    </MantineProvider>
  );
}
```

### CSS Classes

Global styles defined in `src/index.css`:
- Standard CSS reset
- Tailwind CSS directives
- Mantine styles

### Mantine Breakpoints

Used in responsive design:

| Breakpoint | Min Width | CSS Variable              |
| ---------- | --------- | ------------------------- |
| `xs`       | 0px       | `var(--mantine-bp-xs)`    |
| `sm`       | 576px     | `var(--mantine-bp-sm)`    |
| `md`       | 768px     | `var(--mantine-bp-md)`    |
| `lg`       | 992px     | `var(--mantine-bp-lg)`    |
| `xl`       | 1200px    | `var(--mantine-bp-xl)`    |

**Usage**:
```typescript
import { SimpleGrid } from "@mantine/core";

export function ResponsiveGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
      {/* Items */}
    </SimpleGrid>
  );
}
```

### Color Variables

Access Mantine colors with CSS variables:

```
var(--mantine-color-{color}-{shade})
```

**Colors**: blue, red, green, yellow, gray, orange, etc.  
**Shades**: 0-9 (0 = lightest, 9 = darkest)

**Examples**:
```css
color: var(--mantine-color-blue-6);
background-color: var(--mantine-color-gray-0);
border-color: var(--mantine-color-red-5);
```

## Dependencies Reference

### UI Framework

**@mantine/core** v8.3.6
- Component library
- Hooks (useMediaQuery, useClipboard, etc.)
- Theme system

**@mantine/dates** v8.3.6
- Date picker components
- Uses dayjs internally

**@mantine/charts** v8.3.6
- Chart components
- Uses recharts internally

**@mantine/carousel** v8.3.6
- Carousel component
- Uses embla-carousel internally

**@mantine/form** v8.3.6
- Form utilities and validation

### Icons

**@tabler/icons-react** v3.35.0
- 4000+ tree-shakeable icons
- Usage: `import { IconName } from "@tabler/icons-react"`

### Routing

**@tanstack/react-router** v1.134.9
- File-less routing system
- Type-safe route definitions

**@tanstack/react-router-devtools** v1.134.9 (dev only)
- Router debugging tools

### Build Tools

**Vite** v7
- Fast build tool
- Development server with HMR

**React** v19.1.1
- UI library
- React Compiler enabled

**TypeScript** ~5.9.3
- Type system
- Static type checking

**Tailwind CSS** v4.1
- Utility-first CSS framework
- PostCSS integration

### Development Tools

**ESLint** v9.39.0
- Code linting
- Flat config format

**TypeScript ESLint** v8.46.2
- TypeScript support for ESLint

**Babel** (via React Compiler)
- AST transformation
- Component optimization

## Commands Reference

### Development

```bash
npm run dev
```
Start Vite dev server with HMR on http://localhost:5173

### Production

```bash
npm run build
```
Build for production:
1. Type check with TypeScript (`tsc -b`)
2. Bundle with Vite
3. Output to `dist/`

```bash
npm run preview
```
Preview production build locally

### Code Quality

```bash
npm run lint
```
Run ESLint to check code quality

### Other Commands

```bash
npm install
```
Install dependencies

```bash
npm run format
```
Format code (if formatter configured)

## Routes Reference

All routes defined in `src/routes/index.ts`:

| Path | Component | Type |
|------|-----------|------|
| `/` | Home | Main page |
| `/about` | About | Info page |
| `/components/button` | ButtonShowcase | Showcase |
| `/components/alert` | AlertShowcase | Showcase |
| `*` | NotFound | 404 page |

## File Location Quick Reference

| What | Where |
|-----|-------|
| Routes | `src/routes/index.ts` |
| Config | `src/config/constants.ts` |
| Theme | `src/config/theme.ts` |
| Navigation | `src/components/Navigation.tsx` |
| Showcase Template | `src/components/ComponentShowcase.tsx` |
| Custom Hooks | `src/hooks/` |
| Pages | `src/pages/` |
| Layouts | `src/layouts/` |
| Global Styles | `src/index.css` |
| App Setup | `src/app.tsx` |
| Router | `src/router.tsx` |
| Entry Point | `src/main.tsx` |

## Environment Variables

Currently no environment variables required. Configuration is in `src/config/constants.ts`.

## Build Output

**Output Directory**: `dist/`

**Contents**:
- `index.html` - HTML entry point
- `assets/` - Bundled JavaScript and CSS
- `vite.svg` - Vite logo (static asset)

**Build Size**: ~500KB (gzipped ~150KB)

## Type Safety

### TypeScript Configuration

**Files**:
- `tsconfig.json` - Main config
- `tsconfig.app.json` - App code config
- `tsconfig.node.json` - Build config

**Strict Mode**: Not yet enabled (recommended for production)

**Compiler Options**:
- Target: ES2020
- Module: ESNext
- JSX: React-JSX
- Strict: false (consider enabling)

### Router Types

Register interface required for type safety:

```typescript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
```

This is already configured in `src/router.tsx`.

## Performance

### React Compiler

Enabled via `babel-plugin-react-compiler` in `vite.config.ts`.

**Benefits**:
- Automatic memoization
- Reduced re-renders
- Better performance with complex components

**Note**: Keep components simple for best results.

### Code Splitting

Vite automatically code-splits routes:
- Each route chunks into separate bundle
- Loaded on demand
- Reduces initial load time

### Tree Shaking

Unused code is removed from bundle:
- Icons: Only imported icons included
- Components: Unused components removed
- Utilities: Unused utilities removed

## Deployment

### GitHub Pages

Configured for automatic deployment to GitHub Pages.

**Base Path**: `/mantine-component-proto`

**Workflow**: `.github/workflows/deploy.yml`

**Steps**:
1. Push to main branch
2. GitHub Actions builds and deploys
3. Site available at: https://amirmanshadi.github.io/mantine-component-proto/

## Conventions

### Import Paths

Use relative imports or path aliases:

```typescript
// Relative
import { Component } from "../../components/MyComponent";

// Path alias (if configured)
import { Component } from "@/components/MyComponent";
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Navigation.tsx`)
- **Functions**: camelCase (e.g., `useCounter.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `APP_CONFIG`)
- **Files**: Match export name case

### Commit Messages

Follow Conventional Commits:
```
type(scope): subject
```

Types: feat, fix, docs, style, refactor, perf, test, chore, ci  
Scopes: router, components, pages, layouts, styles, deps, config

Example: `feat(pages): add card showcase`
