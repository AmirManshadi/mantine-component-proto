# Documentation Index

Welcome to the Yadakito Proto documentation! This guide will help you navigate all available resources.

## 📚 Documentation Structure

```
docs/
├── guide/                    # User-friendly guides for getting started
│   ├── README.md            # Overview and quick links
│   ├── getting-started.md   # Setup and first steps
│   ├── project-structure.md # File organization and architecture
│   ├── architecture.md      # System design and data flow
│   └── development.md       # Common tasks and workflows
├── reference/               # Technical reference
│   └── index.md            # API, config, styling, and commands reference
└── developer/               # Developer guidelines
    ├── contributing.md     # Contribution guidelines and conventions
    ├── copilot-instructions.md  # AI coding agent instructions
    └── github-pages-setup.md    # Deployment documentation
```

## 🚀 Quick Start

### New to the Project?

Start here:
1. [Getting Started](./guide/getting-started.md) - Set up and first steps (5 min)
2. [Project Structure](./guide/project-structure.md) - Understand the codebase (10 min)
3. [Development Guide](./guide/development.md) - Common tasks (10 min)

### Want to Understand Architecture?

Read these:
1. [Architecture Guide](./guide/architecture.md) - Visual system design (10 min)
2. [Reference Documentation](./reference/index.md) - Technical details (as needed)

### Ready to Contribute?

Check out:
1. [Contributing Guide](./developer/contributing.md) - Guidelines and conventions
2. [Copilot Instructions](./developer/copilot-instructions.md) - AI agent guide

## 📖 By Role

### Project Manager / Stakeholder

- **Understanding**: [Project Structure](./guide/project-structure.md) - See what exists
- **Progress**: [Architecture Guide](./guide/architecture.md) - How it's organized
- **Status**: Check deployment [GitHub Pages Setup](./developer/github-pages-setup.md)

### Frontend Developer (New)

- **Setup**: [Getting Started](./guide/getting-started.md)
- **Understanding**: [Project Structure](./guide/project-structure.md)
- **Deep Dive**: [Architecture Guide](./guide/architecture.md)
- **Building**: [Development Guide](./guide/development.md)

### Frontend Developer (Existing)

- **Reference**: [Technical Reference](./reference/index.md)
- **Patterns**: [Development Guide](./guide/development.md)
- **Contributing**: [Contributing Guide](./developer/contributing.md)

### Team Lead / Tech Lead

- **Overview**: [Project Structure](./guide/project-structure.md)
- **Quality**: [Contributing Guide](./developer/contributing.md)
- **Onboarding**: Direct new devs to [Getting Started](./guide/getting-started.md)

### AI Coding Agent / Copilot

- **Primary**: [Copilot Instructions](./developer/copilot-instructions.md)
- **Reference**: [Technical Reference](./reference/index.md)
- **Tasks**: [Development Guide](./guide/development.md)

## 📚 Documentation Map

### Guide Section

| Document                                          | Purpose                      | Read Time |
| ------------------------------------------------- | ---------------------------- | --------- |
| [Getting Started](./guide/getting-started.md)     | Installation and first steps | 5 min     |
| [Project Structure](./guide/project-structure.md) | File organization and layers | 10 min    |
| [Architecture Guide](./guide/architecture.md)     | System design and data flow  | 10 min    |
| [Development Guide](./guide/development.md)       | Common tasks and workflows   | 15 min    |

### Reference Section

| Document                                    | Purpose               | Use When                  |
| ------------------------------------------- | --------------------- | ------------------------- |
| [Technical Reference](./reference/index.md) | API, config, commands | Need specific information |

### Developer Section

| Document                                                    | Purpose                 | For                       |
| ----------------------------------------------------------- | ----------------------- | ------------------------- |
| [Contributing Guide](./developer/contributing.md)           | Contribution guidelines | Contributing code         |
| [Copilot Instructions](./developer/copilot-instructions.md) | AI agent guide          | Using AI for development  |
| [GitHub Pages Setup](./developer/github-pages-setup.md)     | Deployment guide        | Deploying to GitHub Pages |

## 🎯 Common Tasks

### I want to...

#### Add a New Page
→ [Development Guide](./guide/development.md#adding-a-new-page)

#### Add a Component Showcase
→ [Development Guide](./guide/development.md#adding-a-component-showcase-page)

#### Add a Custom Hook
→ [Development Guide](./guide/development.md#adding-a-custom-hook)

#### Update Configuration
→ [Development Guide](./guide/development.md#updating-configuration)

#### Understand the Architecture
→ [Architecture Guide](./guide/architecture.md)

#### Deploy to GitHub Pages
→ [GitHub Pages Setup](./developer/github-pages-setup.md)

#### Contribute Code
→ [Contributing Guide](./developer/contributing.md)

#### Check What's Available
→ [Technical Reference](./reference/index.md)

## 🔍 Finding Information

### By Topic

**Routing**
- [Project Structure - Routes](./guide/project-structure.md#routes-layer)
- [Architecture - Request Lifecycle](./guide/architecture.md#request-lifecycle-1)
- [Reference - Routes](./reference/index.md#routes-reference)

**Configuration**
- [Project Structure - Config Layer](./guide/project-structure.md#config-layer)
- [Reference - Configuration](./reference/index.md#configuration-reference)

**Components**
- [Project Structure - Components](./guide/project-structure.md#components-layer)
- [Reference - API Reference](./reference/index.md#api-reference)

**Styling**
- [Architecture - Styling](./guide/architecture.md#styling-mantine--tailwind-integration)
- [Reference - Styling](./reference/index.md#styling-reference)

**Development**
- [Development Guide](./guide/development.md)
- [Contributing Guide](./developer/contributing.md)

**Deployment**
- [GitHub Pages Setup](./developer/github-pages-setup.md)

## 💡 Learning Paths

### Path 1: Quick Start (20 minutes)
1. [Getting Started](./guide/getting-started.md) - 5 min
2. [Project Structure](./guide/project-structure.md) - 10 min
3. [Quick Start Commands](./guide/getting-started.md#available-commands) - 5 min

### Path 2: Understanding the Project (30 minutes)
1. [Getting Started](./guide/getting-started.md) - 5 min
2. [Project Structure](./guide/project-structure.md) - 10 min
3. [Architecture Guide](./guide/architecture.md) - 10 min
4. [Development Guide](./guide/development.md) - 5 min

### Path 3: Ready to Develop (45 minutes)
1. Path 2 above (30 min)
2. [Development Guide](./guide/development.md) - 10 min
3. [Contributing Guide](./developer/contributing.md) - 5 min

### Path 4: Deep Dive (60+ minutes)
1. Path 3 above (45 min)
2. [Technical Reference](./reference/index.md) - 15 min
3. Review actual code and patterns

## 🎓 Key Concepts

### Single Source of Truth
Config lives in `src/config/constants.ts`. Components import from here.
→ [Project Structure - Configuration](./guide/project-structure.md#1-config-layer)

### Centralized Routes
All routes defined in `src/routes/index.ts`, not scattered.
→ [Architecture - Routing](./guide/architecture.md#routing-pattern)

### DRY Template Pattern
ComponentShowcase template eliminates duplicate showcase page code.
→ [Development - Showcase Pages](./guide/development.md#adding-a-component-showcase-page)

### Data Flow
Config → Navigation → Layout → Pages
→ [Architecture - Data Flow](./guide/architecture.md#data-flow-patterns)

### Mantine + Tailwind
Use Mantine components primarily, Tailwind for utility support.
→ [Architecture - Styling](./guide/architecture.md#styling-mantine--tailwind-integration)

## 🔗 Cross-References

Many documents link to each other for easy navigation:
- **Getting Started** → Project Structure, Development Guide
- **Project Structure** → Architecture, Development Guide
- **Architecture** → Project Structure, Development Guide
- **Development Guide** → Contributing, Reference
- **Contributing** → Development Guide, Commit Conventions
- **Reference** → All guides for deep context

## ❓ FAQ

**Q: Where are routes defined?**
A: `src/routes/index.ts` - see [Project Structure](./guide/project-structure.md#routes-layer)

**Q: Where's app configuration?**
A: `src/config/constants.ts` - see [Project Structure](./guide/project-structure.md#config-layer)

**Q: How do I add a new showcase page?**
A: Follow [Development Guide](./guide/development.md#adding-a-component-showcase-page)

**Q: What's the commit message format?**
A: See [Contributing Guide](./developer/contributing.md#commit-conventions)

**Q: How do I deploy to GitHub Pages?**
A: See [GitHub Pages Setup](./developer/github-pages-setup.md)

**Q: Where's the theme configuration?**
A: `src/config/theme.ts` - see [Project Structure](./guide/project-structure.md#config-layer)

**Q: Can I add custom hooks?**
A: Yes! See [Development Guide](./guide/development.md#adding-a-custom-hook)

## 🚀 Getting Started Now

Choose your next step:

1. **I'm new** → [Getting Started](./guide/getting-started.md)
2. **I need context** → [Project Structure](./guide/project-structure.md)
3. **I'm ready to build** → [Development Guide](./guide/development.md)
4. **I'm contributing** → [Contributing Guide](./developer/contributing.md)
5. **I'm an AI agent** → [Copilot Instructions](./developer/copilot-instructions.md)

---

**Last Updated**: November 3, 2025  
**Project**: Yadakito Proto  
**Status**: ✨ Documentation Complete
