# welcome to my portfolio! tee-hee!

marcos arnold' personal portfolio showcasing projects, puzzles, and weaving!
site is based on [Ben Aguirre's portfolio](https://benaguirre.dev/)!

- **Live Demo**: [https://marcosarnold.github.io](https://marcosarnold.github.io/)
- **Author**: Marcos Arnold

## Features

- **Projects**: Highlight selected work with clean cards and responsive layout
- **Blog**: Markdown-based posts from `content/blog` with frontmatter (`title`, `date`, `excerpt`)
- **Photography**: Supabase Storage backed gallery with public and private buckets
- **Dark mode**: Theme toggle with system preference support
- **Responsive & accessible**: Built with semantic HTML and accessible UI primitives

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components) + React 19
- **Styling**: Tailwind CSS 4, `@tailwindcss/typography`
- **UI Components**: shadcn/ui (Radix UI + `class-variance-authority`, `clsx`), `lucide-react`
- **State/Theme**: `next-themes`
- **Content**: Markdown via `gray-matter` and `react-markdown`
- **Data + Auth + Storage**: Supabase (`@supabase/ssr`, `@supabase/supabase-js`)
- **Images**: Next.js Image, optional `sharp`
- **Utilities**: `date-fns`, `uuid`, `tailwind-merge`
- **Build & Lint**: Turbopack, ESLint (next/core-web-vitals)
- **Deployment**: Github Pages
