# Reference Project Research: WDS Shadcn Registry

## Overview

The reference project (https://github.com/WebDevSimplified/wds-shadcn-registry) is a documentation site for accessible Shadcn UI components, built with Astro and Starlight.

## Tech Stack

### Core Framework
- **Astro 5.16.6** - Modern static site generator
- **TypeScript** - Type-safe development
- **React 19.2.3** - Component library integration via @astrojs/react

### Documentation
- **@astrojs/starlight 0.37.1** - Official Astro documentation theme
- **@astrojs/mdx** - MDX support for rich content
- **@astrojs/sitemap** - SEO sitemap generation
- **@expressive-code/plugin-line-numbers** - Enhanced code blocks

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework with Vite integration
- **@tailwindcss/vite** - Tailwind Vite plugin
- **starlight-theme-black 0.6.0** - Dark theme for Starlight
- **@fontsource/geist-sans & geist-mono** - Font optimization
- **tw-animate-css** - Tailwind animation utilities

### Component Libraries
- **Radix UI** - Headless UI primitives (dialog, tabs, popover, etc.)
- **shadcn 3.6.2** - Component registry system
- **lucide-react** - Icon library
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional styling utilities
- **react-hook-form** - Form handling
- **sonner** - Toast notifications

### Developer Tools
- **ESLint 9.39.2** - Linting with TypeScript support
- **Prettier 3.7.4** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged 16.2.7** - Pre-commit linting
- **TypeScript 5.9.3** - Static type checking

## Architecture Patterns

### Project Structure
```
src/
├── assets/       # Static assets (logo, fonts)
├── components/   # React & Astro components
├── content/      # MDX/Markdown documentation
├── layouts/      # Page layouts
├── pages/        # Route pages
└── styles/       # Global styles
```

### Configuration Architecture
- **astro.config.mts** - Main config with environment schema
- **components.json** - Shadcn component registry config
- **.env.example** - Environment variable template
- **tsconfig.json** - TypeScript configuration

### Environment Management
- Uses Vite's `loadEnv` for environment loading
- Environment schema defined in Astro config for type safety
- Separate URLs for dev, preview, and production

### Styling Strategy
- Tailwind CSS via Vite plugin (no PostCSS config needed)
- Global CSS for Starlight customization
- Component variants using class-variance-authority
- Dark mode support via Starlight theme

## Clean Code Patterns

### Configuration Pattern
```typescript
// Type-safe environment loading with schema
const { GITHUB_REPO_URL, DEPLOY_PRIME_URL, URL } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
)

// Schema validation in Astro config
env: {
  schema: {
    GITHUB_REPO_URL: envField.string({ context: "client", access: "public" }),
    // ...
  },
}
```

### Component Organization
- Separation of concerns: UI components vs. documentation components
- Custom Starlight overrides in dedicated directory
- Head, social links, and logos configured in Starlight config

### Sidebar Organization
- Manual grouping for main sections
- Autogeneration for component docs
- Logical hierarchy: Getting Started → Components → Contributing

### Git Hooks
- Husky for pre-commit hooks
- lint-staged for efficient pre-commit checks
- Automated formatting and linting

## Testing Strategies

The reference project does not have explicit test files. Testing appears to be:
- Manual testing via `pnpm dev` and `pnpm preview`
- ESLint for code quality
- TypeScript for type safety
- Build verification via `pnpm build`

## Best Practices to Adopt

### 1. Environment Variable Management
- Define environment schema in Astro config
- Use `.env.example` for documentation
- Separate URLs for different environments

### 2. Starlight Configuration
- Custom CSS for theming
- Component overrides for flexibility
- Social links for brand presence
- Edit links for community contributions

### 3. Styling Approach
- Tailwind CSS with Vite plugin (modern approach)
- Font optimization via @fontsource
- Dark mode support via theme
- Animation utilities for enhanced UX

### 4. Code Quality
- ESLint with TypeScript support
- Prettier for consistent formatting
- Husky + lint-staged for pre-commit checks
- Strict TypeScript configuration

### 5. Documentation Structure
- Clear sidebar hierarchy
- Autogenerate component docs
- Contributing guidelines
- Multiple formats (Markdown + MDX)

## Customizations for Our Project

### Differences from Reference
- **No React integration needed** initially (can add later if needed)
- **Simpler component system** (no Shadcn registry initially)
- **Different branding** (custom logo, colors, social links)
- **Content structure** tailored to our documentation needs

### Recommended Initial Setup
1. Starlight with basic configuration
2. Tailwind CSS for styling
3. TypeScript for type safety
4. ESLint + Prettier for code quality
5. Environment variable schema
6. Custom sidebar structure

### Optional Future Enhancements
- React integration for interactive components
- Shadcn component library if UI components needed
- Expressive Code plugins for enhanced code blocks
- Custom Starlight theme

## Key Files to Reference

- `astro.config.mts` - Configuration patterns
- `package.json` - Dependency management
- `.prettierrc` - Code formatting rules
- `eslint.config.ts` - Linting configuration
- `src/styles/global.css` - Global styling approach
- `components.json` - Component registry pattern (if using Shadcn)