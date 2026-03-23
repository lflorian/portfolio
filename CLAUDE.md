# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

Next.js 15 App Router portfolio site with file-based MDX content, Tailwind CSS 4, and TypeScript (strict mode). Deployed on Vercel.

### Content System

Blog posts and projects live as `.mdx` files in `/content/blog/` and `/content/projects/` with YAML frontmatter. The `lib/mdx.ts` module provides `getAllProjects()`, `getAllBlogPosts()`, `getProjectBySlug()`, `getBlogBySlug()` — all parse frontmatter via `gray-matter` and convert markdown body via `marked`. Content is statically generated using `generateStaticParams()` in dynamic `[slug]` routes.

MDX rendering styles are defined in `mdx-components.tsx` (custom Tailwind classes per HTML element) and supplemented by `.prose` classes in `app/globals.css`.

### Animation System

A custom `useIntersectionObserver` hook (`lib/`) powers scroll-triggered animations. `AnimatedElement` wraps content with configurable animation types (fade, fadeUp, scale, etc.) and `StaggeredAnimation` adds cascading delays to children. Both live in `app/components/`.

### Layout

- `app/sections/` — Page-level sections: Header, Footer, Hero, Skills
- `app/components/` — Reusable animation wrappers
- `app/layout.tsx` — Root layout (Montserrat font, Vercel Analytics, Header/Footer)
- Pages: `/blog`, `/projects`, `/contact`, `/imprint`, `/dont-be-late-privacy`

### Path Alias

`@/*` maps to the project root (e.g., `@/lib/mdx`).
