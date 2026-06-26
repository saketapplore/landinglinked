# LinkEDtohome — Landing Page

React 19 + Vite + TypeScript + Tailwind CSS public marketing site.

---

## Environment Setup

Environment files control which API and app URL the site points to. Each file maps to a Vite mode:

| File | Mode | API | App URL |
|---|---|---|---|
| `.env.development` | `development` | `http://localhost:3000/api` | `http://localhost:5174` |
| `.env.staging` | `staging` | `https://api-stage.linkedtohome.com/api` | `https://stage.linkedtohome.com` |
| `.env.production` | `production` | `https://linked-to-home-api.applore.in/api` | `https://www.linkedtohome.com` |

### Variables

```
VITE_API_BASE_URL=   # Backend API base URL (required)
VITE_APP_NAME=       # App display name
VITE_APP_URL=        # School dashboard URL (used for register links in Pricing page)
```

---

## Running Locally

### Development (local backend)

```bash
npm install
npm run dev
```

Runs on `http://localhost:5173` — points to `http://localhost:3000/api`.

### Staging environment locally

```bash
npm run dev:staging
```

Runs on `http://localhost:5173` — points to the staging API.

### Production environment locally

```bash
npm run dev:production
```

Runs on `http://localhost:5173` — points to the production API.

---

## Building for Deployment

### Build for staging

```bash
npm run build:staging
```

Output in `dist/` — configured for the staging API and app URL.

### Build for production

```bash
npm run build:production
```

Output in `dist/` — configured for production. Also runs `cd server && npm install` for the SSR server.

### Preview a build locally

```bash
npm run preview
```

Serves the last built `dist/` on `http://localhost:4173`.

### Start production server (SSR/Node)

```bash
npm run start
```

Runs `server/index.js` — used in production hosting environments.

---

## Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Dev server → local backend |
| `npm run dev:staging` | Dev server → staging backend |
| `npm run dev:production` | Dev server → production backend |
| `npm run build` | Production build (with server install) |
| `npm run build:staging` | Staging build |
| `npm run build:production` | Production build (with server install) |
| `npm run preview` | Preview last build |
| `npm run start` | Start production Node server |

---

## Config

Exported from `src/config/index.ts`:

```ts
export const API_URL = import.meta.env.VITE_API_BASE_URL;
export const APP_NAME = import.meta.env.VITE_APP_NAME;
export const APP_URL = import.meta.env.VITE_APP_URL;
```

The current mode and API URL are printed to the browser console on startup.
