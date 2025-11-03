# Development Guide

Common tasks and workflows for developers working on Yadakito Proto.

## Adding a New Page

### Step 1: Create the Component

Create a new file in `src/pages/`:

```typescript
// src/pages/my-page.tsx
import { Container, Title, Text, Stack } from "@mantine/core";

export default function MyPage() {
  return (
    <Container size="md">
      <Stack gap="lg">
        <Title order={1}>My Page</Title>
        <Text>Page content goes here</Text>
      </Stack>
    </Container>
  );
}
```

### Step 2: Add Route

Edit `src/routes/index.ts`:

```typescript
import MyPage from "../pages/my-page";

// Add route definition
export const myPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/my-page",
  component: MyPage
});

// Add to routeTree
export const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  myPageRoute,  // ← Add here
  // ... other routes
]);
```

### Step 3: Update Navigation (If Needed)

Edit `src/config/constants.ts`:

```typescript
export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "My Page", path: "/my-page" },  // ← Add here
] as const;
```

### Step 4: Commit

```bash
git add .
git commit -m "feat(pages): add my-page"
```

## Adding a Component Showcase Page

Showcase pages demonstrate Mantine components with multiple variants and examples.

### Step 1: Create Component

Create file in `src/pages/components/`:

```typescript
// src/pages/components/card.tsx
import { ComponentShowcase } from "../../components/ComponentShowcase";
import { Card, Group, Text, Button } from "@mantine/core";

export default function CardShowcase() {
  return (
    <ComponentShowcase
      title="Card Component"
      description="A flexible container for grouping related content and actions."
      sections={[
        {
          title: "Basic Card",
          children: (
            <Card withBorder>
              <Card.Section p="md">
                <Text fw={500}>Section</Text>
              </Card.Section>
              <Group mt="md">
                <Button>Action</Button>
              </Group>
            </Card>
          )
        },
        {
          title: "With Shadow",
          children: (
            <Card shadow="md" p="lg">
              <Text>Card with shadow effect</Text>
            </Card>
          )
        }
      ]}
    />
  );
}
```

### Step 2: Add Route

Edit `src/routes/index.ts`:

```typescript
import CardShowcase from "../pages/components/card";

export const cardShowcaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/components/card",
  component: CardShowcase
});

export const routeTree = rootRoute.addChildren([
  // ... existing routes
  cardShowcaseRoute,  // ← Add here
]);
```

### Step 3: Update Showcase Items

Edit `src/config/constants.ts`:

```typescript
import { IconCards } from "@tabler/icons-react";

export const COMPONENT_SHOWCASE_ITEMS = [
  {
    name: "Button",
    description: "Interactive button component with multiple variants and sizes",
    path: "/components/button",
    icon: IconBubble,
    color: "blue"
  },
  // ... other items
  {
    name: "Card",
    description: "A flexible container for grouping related content and actions",
    path: "/components/card",
    icon: IconCards,
    color: "purple"
  }
] as const;
```

### Step 4: Commit

```bash
git add .
git commit -m "feat(pages): add card showcase"
```

## Adding a Custom Hook

### Step 1: Create Hook

Create file in `src/hooks/`:

```typescript
// src/hooks/useCounter.ts
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
```

### Step 2: Export from Index

Edit `src/hooks/index.ts`:

```typescript
export { useCounter } from "./useCounter";
```

### Step 3: Use in Components

```typescript
import { useCounter } from "@/hooks";

export function MyComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### Step 4: Commit

```bash
git add .
git commit -m "feat(hooks): add useCounter"
```

## Updating Configuration

### Adding App Config

Edit `src/config/constants.ts`:

```typescript
export const APP_CONFIG = {
  name: "Yadakito Proto",
  basePath: "/mantine-component-proto",
  containerSize: "lg" as const,
  navHeight: "md" as const,
  apiUrl: "https://api.example.com"  // ← Add new config
} as const;
```

Use in components:

```typescript
import { APP_CONFIG } from "@/config/constants";

export function MyComponent() {
  return <div>{APP_CONFIG.apiUrl}</div>;
}
```

### Updating Theme

Edit `src/config/theme.ts`:

```typescript
import { createTheme, colorsTuple, type MantineColorsTuple } from "@mantine/core";

const PRIMARY_COLOR = "#0066cc";
const colorTuple: MantineColorsTuple = colorsTuple(PRIMARY_COLOR);

export const theme = createTheme({
  colors: {
    colorTuple
  },
  primaryColor: "colorTuple",
  // Add more theme customizations
  fontFamily: "'Inter', sans-serif",
  headings: { fontFamily: "'Inter', sans-serif" }
});
```

The theme is used in `src/app.tsx`:

```typescript
import { MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* App content */}
    </MantineProvider>
  );
}
```

## Styling Patterns

### Inline Styles

Prefer inline styles in Mantine components:

```typescript
<Box style={{ backgroundColor: "blue", padding: "10px" }}>
  Content
</Box>

// Or use Mantine props
<Box p="md" style={{ backgroundColor: "blue" }}>
  Content
</Box>
```

### CSS Variables

Access Mantine colors with CSS variables:

```typescript
<Box style={{ color: "var(--mantine-color-blue-6)" }}>
  Blue text
</Box>
```

### Global Styles

Edit `src/index.css`:

```css
:root {
  --custom-primary: #0066cc;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}
```

## Debugging

### Check TypeScript Errors

```bash
npm run build
```

This runs `tsc -b` which performs type checking. If there are errors, fix them before proceeding.

### Run ESLint

```bash
npm run lint
```

Check code quality and identify potential issues.

### Debug in Browser

Use browser DevTools (F12 in most browsers):
- Inspect elements
- Check console for errors
- Use React DevTools extension
- Debug with breakpoints

### HMR Issues

If hot reload isn't working:

1. Check that `npm run dev` is running
2. Check browser console for errors
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Restart dev server if needed

## Common Issues & Solutions

### Route Not Working

**Problem**: Page doesn't load when navigating to new route.

**Solutions**:
1. Verify route is exported from `src/routes/index.ts`
2. Verify route is added to `routeTree`
3. Verify component path is correct
4. Check browser console for errors

### Styles Not Applying

**Problem**: Mantine component styles aren't showing.

**Solutions**:
1. Verify `MantineProvider` wraps app in `src/app.tsx`
2. Verify theme is imported correctly
3. Check that you're using Mantine components (not HTML elements)
4. Hard refresh browser cache

### Build Fails

**Problem**: `npm run build` fails with errors.

**Solutions**:
1. Check TypeScript errors: `tsc --noEmit`
2. Fix type errors in source files
3. Run `npm run lint` to check for linting issues
4. Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Component Not Updating

**Problem**: Component doesn't re-render when props change.

**Solutions**:
1. Verify state is being updated with setter
2. Check that data flow is correct
3. Use React DevTools to check component tree
4. Ensure parent component triggers re-render

## Performance Tips

1. **Use React Compiler**: It's already enabled. Keep your code simple for best optimization.
2. **Lazy Load Routes**: Large routes are automatically code-split by Vite.
3. **Memoize Components**: Use `React.memo()` for expensive components.
4. **Import Icons Selectively**: Only import the Tabler icons you need.
5. **Check Bundle Size**: Run `npm run build` and check dist/ folder.

## Best Practices

- ✅ Keep components small and focused
- ✅ Use configuration constants instead of hardcoding values
- ✅ Follow Conventional Commits for messages
- ✅ Use TypeScript for type safety
- ✅ Keep styling consistent with Mantine patterns
- ✅ Test components before committing
- ✅ Keep routes organized in `routes/index.ts`
- ✅ Use templates for repeated patterns

## Useful Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Check TypeScript
tsc --noEmit

# Format code (if formatter installed)
npm run format

# Preview production build
npm run preview

# Clean build artifacts
rm -rf dist node_modules
npm install
```

## Next Steps

- Read [Architecture Guide](./architecture.md)
- Check [Contributing Guidelines](../developer/contributing.md)
- Review existing components for patterns
- Start building! 🚀
