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

See [Project Structure Guide](./project-structure.md) for detailed information.

```
src/
├── config/            # Configuration layer
│   ├── constants.ts
│   └── theme.ts
├── routes/            # Route definitions
│   └── index.ts
├── components/        # Reusable components
│   ├── Navigation.tsx
│   └── ComponentShowcase.tsx
├── layouts/           # Layout wrappers
│   └── root-layout.tsx
├── pages/             # Page components
│   ├── home.tsx
│   ├── about.tsx
│   ├── not-found.tsx
│   └── components/
│       ├── button.tsx
│       └── alert.tsx
├── app.tsx
├── router.tsx
├── main.tsx
└── index.css
```

## 🎨 Architecture

### Routing
Routes are **centrally defined** in `src/routes/index.ts` using TanStack Router's imperative API:

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

**Example**: `src/pages/components/button.tsx`

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
Mantine theme configured in `src/config/theme.ts`:
```typescript
const theme = createTheme({
  colors: { colorTuple }  // Primary color: 0x0066cc
});
```

## 📚 Documentation

- **[Getting Started](./getting-started.md)** - Setup and first steps
- **[Project Structure](./project-structure.md)** - File organization and architecture
- **[Architecture Guide](./architecture.md)** - System design and data flow
- **[Development Guide](./development.md)** - Common tasks and workflows
- **[Contributing](../developer/contributing.md)** - Commit conventions and guidelines

## 📖 Additional Resources

- [React Compiler Documentation](https://react.dev/learn/react-compiler)
- [Mantine UI Docs](https://mantine.dev/)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)

## 📄 License

See LICENSE file for details.
