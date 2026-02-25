# AGENTS.md

## Cursor Cloud specific instructions

This is a **single-file static HTML portfolio** — no build system, no package manager, no framework.

### Running the dev server

Serve `index.html` with any static file server:

```bash
python3 -m http.server 8000
```

The site is then available at `http://localhost:8000/index.html`.

### Key facts

- `index.html` (~600 KB) is entirely self-contained: inline CSS, inline JS, and a base64-embedded hero caricature image.
- Google Fonts (Lilita One, Nunito, Fira Code) are loaded from CDN at runtime.
- No linting, testing, or build tooling is configured — this is a pre-framework prototype (future plan is to port to Next.js App Router per `CLAUDE.md`).
- No environment variables or secrets are required.
- Easter eggs exist: Konami code, typing "coffee" or "claude" triggers toast notifications.
