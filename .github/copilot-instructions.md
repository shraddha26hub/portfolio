# Copilot / AI agent instructions for this repo

Purpose: help an AI coding agent become productive quickly in this React + Vite portfolio project.

Quick start (commands) ✅
- Install: `npm install`
- Dev server (HMR): `npm run dev` (Vite default: http://localhost:5173)
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (uses ESLint at project root)

Project overview — big picture 🧭
- Simple Vite + React SPA. Entry: `src/main.jsx` (uses `createRoot` + `<StrictMode>` to mount `App`).
- App shell and example UI live in `src/App.jsx`.
- Reusable UI pieces are in `src/components/` (one file per component, `.jsx` extension).
- Styling: Tailwind is used via `@import "tailwindcss"` in `src/index.css`. There are also local styles in `src/App.css`.
- Assets: images and SVGs in `src/assets/` and some root imports (example: `import viteLogo from '/vite.svg'`).

Conventions & patterns to follow 🔧
- File extension: use `.jsx` for any file that contains JSX (this repo uses `.jsx` consistently).
- Components: prefer default-exported functional components. Example pattern:
  ```jsx
  export default function Header(props) {
    return <header className="...">...</header>
  }
  ```
- Import styles/assets using Vite conventions: absolute root imports for files at project root (`/vite.svg`) or relative imports from `src/`.
- State & hooks: existing code uses React hooks (see `App.jsx` with `useState`). Follow that simple functional style.
- Linting: run `npm run lint` and fix stylistic issues before PRs. ESLint config is at repo root.

Project-specific notes & TODOs ⚠️
- Several components are currently empty or incomplete (e.g., `src/components/Hero.jsx`, `Header.jsx` appears truncated). When implementing, follow the component/export pattern above and use Tailwind utility classes for styling.
- There is no `tailwind.config.js` present. If you need to customize Tailwind's `content` paths, run `npx tailwindcss init -p` and include `./index.html` and `./src/**/*.{js,jsx}`.
- No test runner is configured; if you add tests prefer `vitest` for consistency with Vite. Add `test`/`test:watch` scripts to `package.json` when introducing tests.

PR guidance & priorities 📋
- Keep changes focused and small. Run the dev server to check HMR and UI changes.
- Run `npm run lint` and address warnings before opening a PR.
- When adding or modifying components, include a short example usage or update `App.jsx` for manual verification.

Where to look for examples / authoritative code ✨
- `src/main.jsx` — mounting pattern
- `src/App.jsx` — functional component + hooks example
- `src/index.css` — Tailwind import and a few global utilities (e.g., `.scrollbar-hide`)

If something is unclear or you want the file expanded (examples, rules, or PR checklist), tell me which area to expand and I will iterate.