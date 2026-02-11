---
name: react-component-template
description: >
  When generating or updating React components in `.tsx` files,
  always use our team conventions: arrow functions by default for all functions
  and use the detailed functional component template for every component,
  including multiple components in the same file. Trigger on requests like
  "generate component", "refactor component", "convert to FC", or when
  editing `.tsx` files that need standardization.
---

# React Component Generation Guidelines

Your goal is to generate a **React functional component** in TypeScript that follows the exact structure shown below.  
The generated code must:

- Use `FC` with TypeScript props type
- Include consistent regions for hooks, effects, logic, and render
- Export both the component and its props type
- Use spacing and formatting similar to the example
- For components with children, include `PropsWithChildren` and children destructure

## Core Conventions

1. **Arrow Functions by Default**
   - Write all functions as arrow functions (e.g., `const foo = () => {}`).
   - Avoid `function foo(...) {}` syntax unless explicitly requested.

2. **Multiple Components per File**
   - If a file contains **multiple React components**, generate each using
     the template structure:
     - Always include props types
     - Use grouped regions for hooks and logic
     - Consistent use of `useEffect` with dependencies
     - Structured render regions

### Base template examples

#### Function Component

When generating any React functional component, always follow these exact steps:

```tsx
import { FC, useEffect, useState } from "react";

type {{ComponentName}}Props = unknown;

const {{ComponentName}}: FC<{{ComponentName}}Props> = () => {
  // #region hooks start
  const [_temp, setTemp] = useState<unknown>(undefined);
  // #endregion hooks end

  // #region logic functions start
  // #endregion logic functions end

  // #region useEffect functions start
  useEffect(() => {
    console.log(_temp);
  }, []);
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <>
      <div>{{ComponentName}}</div>
    </>
  );
  // #endregion render functions end
};

export type { {{ComponentName}}Props };
export { {{ComponentName}} };
```

#### Function Component with Children

When generating any React functional component with children, always follow the same pattern but add
`PropsWithChildren` and destructure children:

```tsx
import { FC, PropsWithChildren, useEffect, useState } from "react";

type {{ComponentName}}Props = unknown;

const {{ComponentName}}: FC<PropsWithChildren<{{ComponentName}}Props>> = ({ children }) => {
  // #region hooks start
  const [_temp, setTemp] = useState<unknown>(undefined);
  // #endregion hooks end

  // #region logic functions start
  // #endregion logic functions end

  // #region useEffect functions start
  useEffect(() => {
    console.log(_temp);
  }, [_temp]);
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <>
      <div>{{ComponentName}} with children</div>
      {children}
    </>
  );
  // #endregion render functions end
};

export type { {{ComponentName}}Props };
export { {{ComponentName}} };
```

## Application Rules

- Copilot should load this skill when asked to generate or refactor React
  components in `.tsx` files.
- The rules apply **even when there are multiple components** in the same
  file; do not generate mixed component styles.

> When you ask Copilot to generate or modify a React component,
> it should apply the examples above unless you explicitly request
> another structure.
