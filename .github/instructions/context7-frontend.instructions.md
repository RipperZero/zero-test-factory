---
name: "Context7 MCP Priority for Frontend and Node.js Documentation"
applyTo: "**"
description: >-
  优先使用 Context7 MCP 查询库文档、API 参考、代码生成及安装/配置步骤。
  Always prioritize Context7 MCP for library docs, API references, code generation, and setup/configuration steps.
---

# Use Context7 MCP as Primary Documentation Source

As a frontend engineer working with React, Vue, Next.js, Nuxt.js, TailwindCSS, Node.js, and related libraries:

- **Always use Context7 MCP** when you need **library/API documentation, code generation, setup, or configuration steps** without me having to explicitly ask.
  This matches the recommended rule to automatically invoke Context7 MCP for code-related queries, ensuring the responses are grounded in up-to-date official docs.:contentReference[oaicite:1]{index=1}

- Prioritize Context7 MCP for:
  - Official API references and version-specific documentation
  - Accurate code examples and best practices
  - Setup instructions and configuration guides
  - Resolving library IDs and fetching docs before generating answers
  - Anything related to frameworks or libraries in your stack

# Framework and Library Guidance

- **React**: Use Context7 MCP for hooks (useState, useEffect, useContext), component APIs, lifecycle, and advanced patterns.
- **Vue / Nuxt**: Always fetch up-to-date docs for Composition API, reactivity, routing, and server options.
- **Next.js**: Use Context7 MCP for routing, data fetching (getServerSideProps, app router), middleware, and config flags.
- **TailwindCSS**: Fetch utility class references, configuration options, and plugin docs from Context7 MCP.
- **Node.js Standard Modules**: Use MCP for fs, http/https, streams, events, child_process, and environment config documentation.
- **Common Libraries**: For React Router, Redux, Pinia, Express, Koa, Prisma, etc., fetch docs via Context7 MCP first.

# How to Use in Copilot Chat

- The Context7 MCP tools must be enabled in the Copilot Chat tool selector.
- When the tools are enabled and this instruction file is loaded, Copilot Chat will attempt to use Context7 MCP first for relevant documentation or code examples.
- If calling a specific library ID, use exact library identifiers when known (e.g., `/react`, `/vercel/next.js`) for more precise docs from Context7.
