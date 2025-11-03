# Contributing to Yadakito Proto

Guidelines for contributing to the Yadakito Proto project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Conventions](#commit-conventions)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

Be respectful, inclusive, and collaborative. We welcome contributions from everyone.

## Getting Started

### 1. Fork the Repository

```bash
git clone https://github.com/AmirManshadi/mantine-component-proto.git
cd mantine-component-proto
```

### 2. Create a Branch

```bash
git checkout -b feature/my-feature
```

Use descriptive branch names:
- `feature/add-card-showcase` ✅
- `fix/navigation-active-state` ✅
- `docs/update-readme` ✅
- `feature/something` ❌ (too vague)

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development

```bash
npm run dev
```

## Development Workflow

### Before Starting

1. Check existing issues/PRs to avoid duplicate work
2. Create an issue if one doesn't exist
3. Discuss major changes before starting

### During Development

1. Make incremental commits
2. Follow code style guidelines
3. Keep changes focused and related
4. Test your changes locally
5. Run linting before committing

```bash
# Type check
tsc --noEmit

# Lint
npm run lint

# Build
npm run build

# Preview
npm run preview
```

### Before Committing

```bash
# Check everything works
npm run build
npm run lint

# Review your changes
git diff

# Stage and commit
git add .
git commit -m "type(scope): subject"
```

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type

Must be one of:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring (no feature/bug fix)
- **perf**: Performance improvements
- **test**: Adding/updating tests
- **chore**: Build process, deps, or other non-code changes
- **ci**: CI/CD configuration changes

### Scope

Specify what part of codebase changed:
- `router` - Router related
- `components` - Component-related
- `pages` - Page-related
- `layouts` - Layout-related
- `styles` - Styling changes
- `deps` - Dependency updates
- `config` - Configuration changes

### Subject

- Use imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at end
- Limit to 50 characters
- Be specific and descriptive

### Body

Optional but recommended:
- Explain **what** and **why**, not how
- Wrap at 72 characters
- Separate from subject with blank line
- Use bullet points for multiple items

### Footer

Optional:
- Reference issues: `Closes #123`, `Fixes #456`
- Document breaking changes: `BREAKING CHANGE: ...`

### Examples

**Simple feature**
```
feat(components): add button component showcase
```

**Feature with details**
```
feat(pages): add component showcase grid

- Create responsive grid layout for component cards
- Add navigation links to component pages
- Implement hover effects and transitions

Closes #42
```

**Bug fix**
```
fix(router): correct import path for root layout

Update import path from ./pages/root-layout to ./layouts/root-layout
after moving layout to dedicated directory.
```

**Documentation**
```
docs: update README with setup instructions
```

**Dependency update**
```
chore(deps): upgrade @tabler/icons-react to v3.35.0
```

## Code Style

### TypeScript

- Use strict typing
- Avoid `any` type
- Export types explicitly
- Use meaningful variable names

```typescript
// ✅ Good
interface ComponentProps {
  title: string;
  onClick: (id: number) => void;
}

export function Component({ title, onClick }: ComponentProps) {
  return <div onClick={() => onClick(1)}>{title}</div>;
}

// ❌ Bad
export function Component(props: any) {
  return <div onClick={() => props.onClick(1)}>{props.title}</div>;
}
```

### React Components

- Use functional components
- Use hooks for state logic
- Keep components focused
- Extract reusable logic

```typescript
// ✅ Good
export function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// ❌ Bad - Too many responsibilities
export function MyComponent() {
  // ... lots of logic here
  // ... API calls
  // ... complex state management
}
```

### Styling

- Use Mantine components and inline styles
- Access colors with CSS variables
- Follow Mantine breakpoints for responsive design

```typescript
// ✅ Good
<Box p="md" style={{ backgroundColor: "var(--mantine-color-blue-6)" }}>
  Content
</Box>

<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
  {/* Items */}
</SimpleGrid>

// ❌ Bad - Hardcoded tailwind classes on Mantine components
<Box className="p-4 bg-blue-600">
  Content
</Box>
```

### File Organization

- Keep related files together
- Use clear, descriptive names
- Follow the directory structure

```
✅ Good structure:
src/
├── components/
│   ├── Navigation.tsx
│   └── ComponentShowcase.tsx
├── pages/
│   └── components/
│       ├── button.tsx
│       └── card.tsx
└── config/
    └── constants.ts

❌ Bad structure:
src/
├── Navigation.tsx
├── button.tsx
├── card.tsx
└── constants.ts
```

### Comments

- Write clear, helpful comments
- Comment the "why", not the "what"
- Keep comments up-to-date

```typescript
// ✅ Good - explains why
// UseCallback is needed here to prevent unnecessary re-renders
// of child components that depend on this function
const handleClick = useCallback(() => {
  // ...
}, [dependency]);

// ❌ Bad - obvious from code
// Set count to zero
setCount(0);
```

## Code Quality Checklist

Before submitting PR, ensure:

- ✅ Code follows TypeScript strict mode best practices
- ✅ Components are functional (no class components)
- ✅ No `any` types
- ✅ Meaningful variable and function names
- ✅ Comments explain "why", not "what"
- ✅ No console.log or debugging code
- ✅ No unnecessary dependencies
- ✅ Follows Mantine design patterns
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ All interactive elements are keyboard accessible

## Testing

### Manual Testing

Test your changes locally:

```bash
npm run dev
# Navigate and test features manually
```

### Type Checking

```bash
tsc --noEmit
```

### Linting

```bash
npm run lint
```

### Building

```bash
npm run build
```

## Pull Request Process

### Before Submitting

1. Update documentation if needed
2. Test all changes thoroughly
3. Ensure branch is up-to-date with main
4. Run all quality checks

```bash
npm run lint
npm run build
```

### Creating PR

1. Push to your fork
2. Create PR against `main` branch
3. Fill out PR template completely
4. Link related issues
5. Request review from maintainers

### PR Title

Follow Conventional Commits:
```
feat(pages): add card showcase
```

### PR Description

Include:
- What changed and why
- How to test the changes
- Any breaking changes
- Screenshots/demos if applicable

### Code Review

- Be open to feedback
- Respond to comments promptly
- Make requested changes
- Push updates to same branch

### Merge

Once approved:
- Ensure all checks pass
- Squash commits if instructed
- Merge to main
- Delete feature branch

## Adding New Features

### Feature Checklist

- [ ] Create issue describing feature
- [ ] Create feature branch
- [ ] Implement feature
- [ ] Add/update tests
- [ ] Update documentation
- [ ] Commit with Conventional Commits
- [ ] Create PR with detailed description
- [ ] Address review feedback
- [ ] Merge to main

### Documentation Updates

Update documentation for:
- New routes/pages
- New components
- New configuration options
- API changes
- Architecture changes

## Reporting Issues

When reporting issues, include:
- Description of problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/error messages
- Environment (OS, Node version, etc.)

## Questions or Need Help?

- Check existing documentation
- Review existing code for examples
- Open an issue with your question
- Join discussions

## Recognition

Contributors will be recognized in:
- Commit history
- Pull requests
- Future CHANGELOG

Thank you for contributing! 🎉
