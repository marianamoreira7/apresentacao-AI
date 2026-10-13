# AI Workshop Starter

Blank starter for the live "prompt your own website" part of the AI presentation.

**Stack:** Vite, React 19, TypeScript, Tailwind CSS v4, lucide-react.

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel: **Add New > Project**, import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Deploy.
4. Every `git push` to `main` redeploys.

## Live demo flow

1. Open the repo in VS Code and run `npm run dev`.
2. Students give a prompt; the AI edits `src/App.tsx` and `src/components/`.
3. Commit and push; Vercel publishes the result.

Project rules for the AI are in `CLAUDE.md`.
