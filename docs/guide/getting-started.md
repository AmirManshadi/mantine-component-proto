# Getting Started

Quick setup guide to get Yadakito Proto running on your machine.

## Prerequisites

- **Node.js**: 18 or higher
- **npm** or **yarn** package manager
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AmirManshadi/mantine-component-proto.git
cd mantine-component-proto
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Available Commands

### Development

```bash
npm run dev
```
Starts Vite dev server with Hot Module Replacement (HMR). Any changes you make are reflected immediately in the browser.

### Building

```bash
npm run build
```
Builds the application for production:
1. Runs TypeScript compiler (`tsc -b`) to check types
2. Bundles with Vite
3. Output is in the `dist/` directory

**Note**: TypeScript errors will block the build. Fix all type errors before proceeding.

### Linting

```bash
npm run lint
```
Runs ESLint to check code quality and find issues.

### Preview

```bash
npm run preview
```
Serves the production build locally for testing before deployment.

## Project Structure Overview

```
src/
├── config/          # App configuration
├── routes/          # Route definitions
├── components/      # Reusable components
├── layouts/         # Layout wrappers
├── pages/           # Page components
├── app.tsx          # Root providers
├── router.tsx       # Router setup
├── main.tsx         # Entry point
└── index.css        # Global styles
```

For detailed structure, see [Project Structure Guide](./project-structure.md).

## Key Concepts

### Routes
All routes are defined in `src/routes/index.ts`. To add a new page:

1. Create a component in `src/pages/`
2. Define the route in `src/routes/index.ts`
3. Add to `routeTree`

### Configuration
Application-wide configuration lives in `src/config/constants.ts`:
- `APP_CONFIG` - App settings (name, paths, sizes)
- `NAV_ITEMS` - Navigation menu items
- `COMPONENT_SHOWCASE_ITEMS` - Showcase page metadata

### Components
Reusable components are in `src/components/`:
- `Navigation.tsx` - Navigation bar
- `ComponentShowcase.tsx` - Template for showcase pages

## Common Tasks

### Adding a New Page

1. Create `src/pages/my-page.tsx`:
```typescript
export default function MyPage() {
  return <div>My Page</div>;
}
```

2. Add route in `src/routes/index.ts`:
```typescript
export const myPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/my-page",
  component: MyPage
});
```

3. Add to `routeTree`:
```typescript
export const routeTree = rootRoute.addChildren([
  homeRoute,
  myPageRoute,
  // ...
]);
```

4. Update navigation in `src/config/constants.ts` if needed

### Adding a Showcase Page

Use the `ComponentShowcase` template to eliminate boilerplate:

1. Create `src/pages/components/my-component.tsx`:
```typescript
import { ComponentShowcase } from "@/components/ComponentShowcase";
import { Group, Button } from "@mantine/core";

export default function MyComponentShowcase() {
  return (
    <ComponentShowcase
      title="My Component"
      description="Component description"
      sections={[
        {
          title: "Basic",
          children: <Group><Button>Example</Button></Group>
        },
        {
          title: "Variants",
          children: <Group>/* More examples */</Group>
        }
      ]}
    />
  );
}
```

2. Add route in `src/routes/index.ts`

3. Update `COMPONENT_SHOWCASE_ITEMS` in `src/config/constants.ts`

## Troubleshooting

### Build Fails with TypeScript Errors
The build process runs type checking first. Fix all TypeScript errors:
```bash
npm run build  # Check errors
# Fix errors in src/
npm run build  # Try again
```

### Mantine Styles Not Applying
Ensure `MantineProvider` is wrapping your app in `src/app.tsx`. Also check that theme is properly imported.

### Routes Not Working
Verify:
1. Route is exported from `src/routes/index.ts`
2. Route is added to `routeTree`
3. Component path is correct
4. `Register` interface is declared in `src/router.tsx`

## Next Steps

1. Read [Project Structure Guide](./project-structure.md)
2. Check [Architecture Guide](./architecture.md)
3. Review [Development Guide](./development.md)
4. Start building! 🚀

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Mantine UI Docs](https://mantine.dev/)
- [TanStack Router Docs](https://tanstack.com/router/latest)
