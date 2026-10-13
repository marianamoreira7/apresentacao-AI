# Project rules (read before editing)

This is a **live workshop project**: 14-15 year old students describe a website
and the AI builds it in front of them. Speed and "it just works" matter most.

## Stack (already installed, do not reinstall)
- Vite + React 19 + TypeScript
- Tailwind CSS v4 (utility classes only, imported in `src/index.css`)
- `lucide-react` for icons
- Alias: `@/` points to `src/` (e.g. `import Hero from '@/components/Hero'`)

## How to build what the students ask for
- Edit `src/App.tsx` and add new components in `src/components/`.
- Style with Tailwind classes. Do not add other CSS files unless needed.
- Make every page responsive (works on phone and laptop).
- Use plain React state (`useState`). No backend, no API keys, no login.
- Use emoji, Tailwind gradients, or lucide icons for visuals.
  Do not rely on external image URLs that may break.
- Keep the text in the language the students use in their prompt.
- Prefer one clear, working result over many half-finished features.

## Do not
- Do not add new dependencies unless the idea truly needs one.
- Do not change `vite.config.ts`, `tsconfig*.json` or `package.json` scripts.
- Do not delete `CLAUDE.md`.
- Do not put secrets or personal data (names, photos, contacts) in the code.

## Checks
- `npm run build` must pass before finishing; it is what Vercel runs.
- Dev server: `npm run dev`.
