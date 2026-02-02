# CLAUDE.md — Development Guidelines

## Project Context

This project is based on an **established template** with tooling and dependencies already configured.

### ❗ Do NOT Modify

* Build configuration (`vite.config.ts`, `tsconfig.json`)
* Linting / formatting (`eslint.config.js`, `.prettierrc`)
* Test configuration (`vitest.config.ts`, `playwright.config.ts`)
* Storybook configuration (`.storybook/`)
* Dependency versions (unless explicitly instructed)

### ✅ Focus On

* Implementing features in `src/`
* Following existing project patterns
* Writing clean, tested, documented code
* Matching existing code style over generic best practices

---

## Rule Priority Order

When rules conflict, follow this order **strictly**:

1. This `CLAUDE.md`
2. Existing project code patterns
3. ESLint / TypeScript errors
4. Tests and test expectations
5. Personal or stylistic preference

---

## Plans

When asked to create a plan:

* Bullet points only
* Max **one line per step**
* No explanations unless requested
* Sacrifice grammar for concision
* End with a section titled **“Open Questions”**

---

## Definitions

* **Component**: Reusable UI element (e.g. Button, Modal)
* **Feature**: Domain-specific grouping of components, hooks, and logic
* **Page**: Route-level component under `src/pages`

---

## Technology Stack (DO NOT CHANGE VERSIONS)

Assume all tools are already on the **latest supported versions provided by the template**.

### Core

* React 19
* Vite
* TypeScript (strict)
* TailwindCSS v4 (CSS-first)

### Testing & Tooling

* Vitest
* React Testing Library
* Playwright
* Storybook

### Package Manager

* Prefer `pnpm`
* Fallback to `npm` only if required

---

## Adding a New Feature — Checklist

1. Create feature/component under `src/`
2. Define explicit TypeScript types
3. Implement logic using existing patterns
4. Add Storybook stories
5. Add unit tests
6. Export from `index.ts`
7. Run lint + format

---

## Code Formatting (NON-NEGOTIABLE)

| Setting       | Value |
| ------------- | ----- |
| trailingComma | all   |
| tabWidth      | 2     |
| semi          | true  |
| singleQuote   | false |
| printWidth    | 100   |

Formatting is enforced automatically — do not fight it.

---

## TypeScript Rules

### Strict Requirements

* Explicit types for **props, state, parameters**
* **Never** use `any` (use `unknown` if required)
* `interface` → object shapes
* `type` → unions / intersections
* Export reusable types

### Functions

* Prefer **named function declarations** for exported functions/components
* Use arrow functions only for:
  * Inline callbacks
  * Anonymous functions
  * Closures passed as props

---

## React Rules (React 19)

### Components

* Functional components only
* Named exports only (no default exports)
* One component per folder with `index.ts`

```ts
// Button.tsx
export function Button() {}

// index.ts
export { Button } from "./Button";
export type { ButtonProps } from "./Button";
```

### React 19 Features (USE)

* `use()` for async/context
* `useTransition()` for non-urgent updates
* Actions for forms
* Suspense for async boundaries

---

## Hooks

* Must start with `use`
* Top-level only (no conditionals)
* Extract complex logic into hooks
* Use `useMemo` / `useCallback` **only** when expensive

---

## Storybook (REQUIRED)

Every custom UI component **must** have a Storybook story.

* Use `satisfies Meta<typeof Component>`
* Prefer realistic args
* Document variants via stories, not comments

---

## TailwindCSS v4

### CSS-First Configuration

* Use `@theme` tokens
* No inline styles

### Class Ordering

Layout → Spacing → Typography → Visual → Effects → Responsive

Ordering will be set by prettier formatting, don't fight it.

### Conditional Classes

* Use `clsx`
* No string concatenation or template literals in `className`

---

## Architecture Rules

* Pages may compose components but contain **no reusable UI logic**
* Components must **never** import from `pages/`
* Hooks should be framework-agnostic where possible
* Utils must have **no React dependencies**

---

## Naming Conventions

| Item       | Convention           |
| ---------- | -------------------- |
| Components | PascalCase           |
| Hooks      | camelCase with `use` |
| Utils      | camelCase            |
| Types      | PascalCase           |
| Constants  | UPPER_SNAKE_CASE     |

---

## Accessibility (REQUIRED)

* Semantic HTML first
* Keyboard navigation
* WCAG AA contrast
* ARIA only when needed
* Alt text on all images

Accessibility regressions are considered bugs.

---

## Environment Variables

* Prefix with `VITE_`
* Never commit `.env`
* Always provide `.env.example`

---

## Performance

* Use `lazy()` + `Suspense` for heavy routes
* Lazy-load images
* Always define image dimensions
* Avoid unnecessary re-renders

---

## Error Handling

* Use Error Boundaries
* Handle async failures explicitly
* Never swallow errors silently

---

## Anti-Patterns (DO NOT DO)

* Class components
* Default exports
* `var`
* Inline styles
* `any`
* Deprecated APIs
* State/prop mutation
* `@ts-ignore`
* Nested ternaries
* Repeated code
* Upgrading dependencies
* Refactoring unrelated files

---

## Testing (MANDATORY)

### Unit Tests

* All hooks
* Complex utilities
* Components with logic
* User interactions

### E2E Tests

* Critical user flows
* Navigation
* Forms
* Responsive behavior

### Coverage

* Utilities: ≥ 80%
* Hooks: 100%
* Critical paths must be covered

---

## Git Rules

### Commits (Conventional Commits)

* `feat:`
* `fix:`
* `docs:`
* `refactor:`
* `test:`
* `chore:`

No vague commit messages.

---

## Code Review Checklist

Before marking work complete:

* [ ] TypeScript passes (`tsc --noEmit`)
* [ ] ESLint clean
* [ ] Prettier applied
* [ ] Tests written and passing
* [ ] Storybook added
* [ ] a11y verified
* [ ] No deprecated APIs
* [ ] No console warnings
* [ ] Conventional commits used

---

## AI-Specific Instructions

When acting as an AI assistant:

* Do NOT upgrade dependencies
* Do NOT introduce new libraries
* Do NOT refactor unrelated code
* Prefer existing patterns over “best practice”
* Ask before making architectural changes

---

## Exceptions

Rules may be relaxed **only** when:

* Required by third-party libraries
* Matching legacy code in this repo
* Platform limitations apply

Any exception **must be documented** in code comments.

---

## Summary

When working on this project:

1. Respect the template
2. Favor clarity over cleverness
3. Follow React 19 patterns
4. Enforce strict TypeScript
5. Test everything that matters
6. Optimize only when necessary
7. Maintain accessibility and performance
8. Keep commits clean and meaningful

This is a **living document**. Update it intentionally as the project evolves.
