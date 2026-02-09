---
name: "react-component-template"
description: "Generate a React functional component using my preferred TypeScript/React template"
---

Your goal is to generate a **React functional component** in TypeScript that follows the exact structure shown below.  
The generated code must:

- Use `FC` with TypeScript props type
- Include consistent regions for hooks, effects, logic, and render
- Export both the component and its props type
- Use spacing and formatting similar to the example
- For components with children, include `PropsWithChildren` and children destructure

### Base template examples

#### Function Component

import { FC, useEffect, useState } from "react";

type {{ComponentName}}Props = unknown;

const {{ComponentName}}: FC<{{ComponentName}}Props> = () => {
// #region hooks start
const [_temp, setTemp] = useState();
// #endregion hooks end

// #region useEffect functions start
useEffect(() => {
console.log(\_temp);
}, []);
// #endregion useEffect functions end

// #region logic functions start
// #endregion logic functions end

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

#### Function Component with Children

import { FC, PropsWithChildren, useEffect, useState } from "react";

type {{ComponentName}}Props = unknown;

const {{ComponentName}}: FC<PropsWithChildren<{{ComponentName}}Props>> = ({ children }) => {
// #region hooks start
const [_temp, setTemp] = useState();
// #endregion hooks end

// #region useEffect functions start
useEffect(() => {
console.log(\_temp);
}, [_temp]);
// #endregion useEffect functions end

// #region logic functions start
// #endregion logic functions end

// #region render functions start
return (
<>

<div>{{ComponentName}} with children</div>
</>
);
// #endregion render functions end
};

export type { {{ComponentName}}Props };
export { {{ComponentName}} };
