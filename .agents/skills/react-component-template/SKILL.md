---
name: react-component-template
description: >-
  在 `.tsx` 文件中生成或修改 React 组件时，使用团队约定：默认使用箭头函数、完整函数组件模板，并对同一文件内的多个组件保持一致。适用于“生成组件”“重构组件”“转换为 FC”或需要标准化 `.tsx` 组件的请求。
  When generating or updating React components in `.tsx` files, always use our team conventions: arrow functions by default for all functions and use the detailed functional component template for every component, including multiple components in the same file. Trigger on requests like "generate component", "refactor component", "convert to FC", or when editing `.tsx` files that need standardization.
---

# React Component Generation Guidelines

Generate or refactor React TypeScript functional components using the team's template. Treat the state, effect, and `console.log` in the examples as intentional explanatory placeholders; preserve them when using the template unless the user asks to remove or replace them.

## Core Conventions

1. **Arrow Functions by Default**
   - Write all functions as arrow functions (for example, `const foo = () => {}`).
   - Avoid `function foo(...) {}` syntax unless explicitly requested.

2. **Multiple Components per File**
   - When a file contains multiple React components, apply the template structure to each component.
   - Include props types, grouped regions, explicit effect dependencies, and structured render regions consistently.

## Base template examples

### Function Component

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

### Function Component with Children

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
