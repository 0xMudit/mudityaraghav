# mudityaraghav-portfolio

Source for **[mudityaraghav.vercel.app](https://mudityaraghav.vercel.app)** — my personal engineering portfolio.

A statically rendered Next.js App Router site. All copy and content lives in a single
typed data module, so the site renders from one source of truth with no CMS and no
runtime data fetching.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Theme | Custom provider with light/dark, no flash on first paint |
| Hosting | Vercel (static output) |

## Structure

```
src/
  app/                    route shell, layout, global styles
  components/
    sections/             hero, highlights, experience, projects, skills, research, education, contact
    ui.tsx                Chip / Section / SectionHeading primitives
    reveal.tsx            IntersectionObserver scroll-in animation
    theme-provider.tsx    light + dark theme state
  data/portfolio.ts       ← ALL content lives here (typed)
public/assets/            project screenshots, résumé PDF, profile photo
```

## Editing content

`src/data/portfolio.ts` is the single source of truth. Every section reads from an
exported, typed array:

| Export | Drives |
|---|---|
| `highlights` | "Now" timeline |
| `projects` | Project cards — **first entry renders as the featured card**, the rest fill a 2-column grid |
| `experience` | Work history |
| `skills` | Skill groups |
| `research` | Publications |
| `socials`, `email`, `resumeUrl` | Contact + résumé links |

To add a project, append an object to `projects` and drop its screenshot in
`public/assets/`. The grid adapts; the order in the array is the order on the page.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build + type checking
npm run lint     # eslint
```

## Deployment

Pushes to `main` deploy automatically via Vercel. The `public/assets/*.pdf` résumé is
served directly, so updating it is just a file replacement — no code change required.
