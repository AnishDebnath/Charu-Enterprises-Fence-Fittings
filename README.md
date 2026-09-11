# Charu Enterprises Fence Fittings

> Pressed Steel, Malleable & Aluminum Fence Fittings — 50+ Years of Manufacturing Excellence

## Overview

Charu Enterprises is an Indian manufacturer of fence fittings with over 50 years of industry experience. The company exports galvanized and powder-coated fittings across 4 continents and has exhibited at FENCETECH for 30+ years.

This repository contains the company's official website, currently in a **pre-launch "Coming Soon" state** with a countdown timer and background video. The full homepage is built but not yet activated.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |

## Folder Structure

```
├── public/                  # Static assets (video, favicon)
├── src/
│   ├── assets/              # Images (logo)
│   ├── components/common/   # Navbar, Footer
│   ├── pages/
│   │   ├── coming-soon/     # Active page (countdown + video)
│   │   └── home/            # Full homepage (12 sections, inactive)
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Server runs at `http://localhost:3000`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript type checking |
| `npm run clean` | Remove `dist/` folder |

## Deployment

Configured for **Vercel** via `vercel.json`:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite: all routes → `index.html`

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Current Status

| Feature | Status |
|---|---|
| Coming Soon page | ✅ Active |
| Background video | ✅ Working |
| Countdown timer | ✅ 5-day window |
| Full homepage | 🔨 Built, not activated |
| Navbar | 🔨 Built, not rendered |
| Footer | 🔨 Built, not rendered |

## License

All Rights Reserved — Charu Enterprises, India
