# Test Vercel

Minimal Next.js application used to validate Vercel deployment behavior and framework defaults before adding application code.

## What this project does

- Validates Next.js setup and build pipeline
- Provides a small `/api/test` route for smoke testing
- Confirms Vercel deploy, preview, and production flows

## Tech stack and tools

- Next.js 16.2.3
- React 19.2.4
- Tailwind CSS 4
- TypeScript 5
- ESLint 9

## Repo structure

```
app/
  page.tsx
  layout.tsx
  globals.css
  favicon.ico
  api/
    test/
      route.js
public/
README.md
package.json
tsconfig.json
next.config.ts
eslint.config.mjs
postcss.config.mjs
tailwind.config.ts
```

## Requirements

- Node.js 18+
- npm or pnpm

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Run and verify

- Visit the home page.
- Call `/api/test` to confirm API route behavior.

## Deploy

Deploy as a standard Next.js app on Vercel.

## License

MIT
