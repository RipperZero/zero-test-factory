---
name: context7-documentation
description: >-
  优先使用 Context7 MCP 查询库文档、API 参考、代码生成及安装/配置步骤。
  Always prioritize Context7 MCP for library docs, API references, code generation, and setup/configuration steps.
---

# Use Context7 MCP as Primary Documentation Source

For React, Vue, Next.js, Nuxt.js, Tailwind CSS, Node.js, and related libraries, always use Context7 MCP for library/API documentation, code generation, setup, and configuration without waiting for an explicit request.

Prioritize Context7 for official API references, version-specific documentation, accurate code examples, setup and configuration guidance, and resolving library IDs before retrieving docs.

## Framework and Library Guidance

- **React**: hooks, component APIs, lifecycle, and advanced patterns.
- **Vue / Nuxt**: Composition API, reactivity, routing, and server options.
- **Next.js**: routing, data fetching, middleware, and configuration flags.
- **Tailwind CSS**: utility references, configuration options, and plugins.
- **Node.js standard modules**: fs, http/https, streams, events, child_process, and environment configuration.
- **Common libraries**: React Router, Redux, Pinia, Express, Koa, Prisma, and similar dependencies.

When Context7 tools are available, resolve the library ID if necessary and retrieve the relevant, version-specific documentation before answering or writing implementation code. Use exact library identifiers where known, such as `/react` or `/vercel/next.js`.

If Context7 is unavailable in the current environment, use the best available primary documentation source and state that Context7 could not be used when that affects confidence or freshness.
