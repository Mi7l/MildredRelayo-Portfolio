# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### LIM.VISUALS (`artifacts/lim-visuals`)
- **Kind**: react-vite, served at `/` (root)
- **Purpose**: High-conversion portfolio/creative studio site for Mildred Relayo (LIM.VISUALS brand)
- **Stack**: React + Vite + Tailwind + Framer Motion + shadcn/ui
- **Design**: Dark editorial glass Apple-style aesthetic, crimson/gold accents, serif + sans typography
- **Sections**: Hero, About, Services, Work/Portfolio, Tools/Stack, Stats, Contact
- **No backend** — frontend-only, static deployment

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
