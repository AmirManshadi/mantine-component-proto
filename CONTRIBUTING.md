# Conventional Commits Guide

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for all commit messages.

## Commit Message Format

Each commit message consists of a **header**, **body**, and **footer**. The header has a special format that includes a **type**, **scope**, and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, missing semicolons, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Code change that improves performance
- **test**: Adding or updating tests
- **chore**: Changes to build process, dependencies, tools, or other non-code changes
- **ci**: Changes to CI/CD configuration files and scripts

## Scope

Optional. The scope specifies what part of the codebase is affected:

- `router` - Router related changes
- `components` - Component-related changes
- `pages` - Page-related changes
- `layouts` - Layout-related changes
- `styles` - Styling changes
- `deps` - Dependency updates
- `config` - Configuration changes
- Or any other relevant scope

## Subject

- Use the imperative mood ("add" not "added" or "adds")
- Do not capitalize the first letter
- Do not end with a period (.)
- Limit to 50 characters
- Be concise and descriptive

## Body

Optional but recommended for non-trivial changes:

- Explain **what** and **why**, not how
- Wrap at 72 characters
- Separate from subject with a blank line
- Use bullet points if listing multiple changes

## Footer

Optional. Use for:

- **Breaking changes**: Start with `BREAKING CHANGE:` followed by a description
- **Issue references**: `Closes #123`, `Fixes #456`, `Relates to #789`

## Examples

### Simple feature
```
feat(components): add button component showcase
```

### Feature with scope and body
```
feat(pages): add component showcase grid

- Create responsive grid layout for component cards
- Add navigation links to component pages
- Implement hover effects and transitions

Closes #42
```

### Bug fix
```
fix(router): correct import path for root layout

Update import path from ./pages/root-layout to ./layouts/root-layout
after moving layout to dedicated directory.
```

### Breaking change
```
feat(styles): remove tailwind css

BREAKING CHANGE: Tailwind CSS classes are no longer used in components.
All components now use Mantine UI styling exclusively.
```

### Documentation
```
docs: update README with setup instructions
```

### Dependency update
```
chore(deps): upgrade @tabler/icons-react to v3.35.0
```

## Git Commit Command

Use the following command to write descriptive commits:

```bash
git commit -m "type(scope): subject" -m "body"
```

Or use interactive mode:

```bash
git commit
```

This opens your editor where you can write the full commit message following the format above.

## Benefits

- Clear project history with searchable commits
- Automatic changelog generation
- Semantic versioning support
- Better collaboration and code review
- Easy to understand code evolution

---

For more information, visit [Conventional Commits](https://www.conventionalcommits.org/)
