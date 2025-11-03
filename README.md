# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Yadakito Proto – Component Showcase

A modern React 19 + TypeScript + Vite application showcasing Mantine UI components with TanStack Router and Tailwind CSS styling.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start dev server with HMR (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📦 Tech Stack

| Layer                 | Technology               | Version |
| --------------------- | ------------------------ | ------- |
| **Framework**         | React                    | 19.1    |
| **Language**          | TypeScript               | ~5.9.3  |
| **Build Tool**        | Vite                     | 7       |
| **Component Library** | Mantine UI               | 8.3.6   |
| **Router**            | TanStack Router          | 1.134.9 |
| **Icons**             | Tabler Icons             | 3.35.0  |
| **Styling**           | Tailwind CSS 4 + PostCSS | 4.1     |

## 📁 Project Structure

```
src/
├── layouts/           # Application layout (navbar, footer wrapper)
│   └── root-layout.tsx
├── pages/             # Page components
│   ├── home.tsx       # Component showcase grid
│   ├── about.tsx
│   ├── not-found.tsx  # 404 page
│   └── components/    # Component showcase pages
│       ├── button-showcase.tsx
│       └── alert-showcase.tsx
├── app.tsx            # Root provider setup (Mantine, Router)
├── router.tsx         # Manual route definitions
├── main.tsx           # React entry point
└── index.css          # Global styles
```

## 🎨 Architecture

### Routing
Routes are **manually defined** in `src/router.tsx` using TanStack Router's imperative API (not file-based). Each route connects to a component and parent route:

```typescript
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home
});
```

### Styling Layer
- **Tailwind CSS 4** with `@tailwindcss/postcss` plugin
- **Mantine UI** components use inline styles (preferred over className)
- **PostCSS**: `postcss-preset-mantine` provides design tokens as CSS variables
- **Breakpoints**: Aligned via `postcss-simple-vars` for Mantine-Tailwind consistency

### React Compiler
Enabled via `babel-plugin-react-compiler` for automatic component optimization. Impacts build performance—monitor for regressions with heavy components.

## 💡 Key Patterns

### Component Showcase Pages
Demonstration pages follow a consistent pattern:
- Page title + description
- `Card`-wrapped sections with component variants
- Tabler icons for visual hierarchy
- Responsive layouts with Mantine primitives (`Stack`, `Group`, `SimpleGrid`)

**Example**: `src/pages/components/button-showcase.tsx`

### Active Route Detection
Use TanStack Router's `Link` render prop to detect active routes:

```typescript
<Link to="/">
  {({ isActive }) => (
    <Button variant={isActive ? "filled" : "subtle"}>Home</Button>
  )}
</Link>
```

### Theme Customization
Mantine theme configured in `app.tsx`:
```typescript
const theme = createTheme({
  colors: { colorTuple }  // Primary color: #0066cc
});
```

## 📝 Conventions

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by `CONTRIBUTING.md`):

```
type(scope): subject

Format: feat|fix|docs|style|refactor|perf|test|chore|ci
Scopes: router|components|pages|layouts|styles|deps|config
Subject: imperative, no period, ≤50 chars
```

**Examples:**
```
feat(pages): add component showcase grid
fix(router): correct import path
docs: update setup instructions
```

### Code Style
- **Inline styles** preferred in Mantine components
- **CSS Variables**: Access Mantine colors via `var(--mantine-color-blue-6)` pattern
- **Type Safety**: Full TypeScript, avoid `any`

## 🔧 Development Workflow

### Adding a New Component Showcase

1. Create `src/pages/components/{component-name}-showcase.tsx`
2. Import Mantine components + Tabler icons
3. Follow the showcase pattern (see `button-showcase.tsx` for reference)
4. Register route in `src/router.tsx`:
   ```typescript
   const componentRoute = createRoute({
     getParentRoute: () => rootRoute,
     path: "/components/component-name",
     component: ComponentShowcase
   });
   routeTree.addChildren([componentRoute]);
   ```
5. Add component card to home page grid (`src/pages/home.tsx`)
6. Commit with `feat(pages): add {component-name} showcase`

### Adding a Regular Page
1. Create `src/pages/{page-name}.tsx`
2. Register route in `src/router.tsx`
3. Update navigation in `src/layouts/root-layout.tsx` if needed

### Styling Updates
- **Global changes**: Update `src/index.css`
- **Mantine theme**: Modify `app.tsx` theme object
- **Tailwind customization**: Edit `tailwind.config.js`

## 📚 Available Dependencies

**UI & Components:**
- `@mantine/core` – Core components and hooks
- `@mantine/form` – Form utilities
- `@mantine/dates` – Date pickers and utilities (dayjs)
- `@mantine/charts` – Chart components (recharts)
- `@mantine/carousel` – Carousel (embla-carousel)
- `@mantine/modals` – Modal management
- `@tiptap/react` – Rich text editor (available, not yet used)

**Routing & Navigation:**
- `@tanstack/react-router` – File-less routing
- `@tanstack/react-router-devtools` – Dev tools (dev only)

**Icons:**
- `@tabler/icons-react` – 4000+ tree-shakeable icons

## ⚠️ Important Notes

1. **TypeScript Errors Block Build**: `npm run build` runs `tsc -b` first; fix all type errors before Vite bundling starts
2. **Mantine vs Tailwind Breakpoints**: Use `cols={{ base: 1, sm: 2, lg: 3 }}` syntax in Mantine components, not Tailwind breakpoints
3. **ESLint Flat Config**: Uses `eslint.config.js` (not `.eslintrc`); checks `.ts` and `.tsx` only
4. **Router Type Safety**: Module declaration for `@tanstack/react-router` and `Register` interface required for full IntelliSense

## 📖 Additional Resources

- [React Compiler Documentation](https://react.dev/learn/react-compiler)
- [Mantine UI Docs](https://mantine.dev/)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)

## 📄 License

See LICENSE file for details.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
