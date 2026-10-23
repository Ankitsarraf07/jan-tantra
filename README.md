# Jan Tantra
Deployed Link: https://lux-stay-frontend.vercel.app/

> Transparent Local Governance for All Citizens — a MERN stack platform for reporting issues, managing funds, and tracking officer performance.

## Features
- Role-based access: Citizen, Officer, Authority, Admin
- Issue reporting, tracking and analytics
- Fund allocation and transaction history
- Officer ranking and performance analytics
- JWT authentication, file uploads, and REST APIs

## Tech stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)

## Quickstart (local)

Prerequisites:
- Node.js 18+ and npm
- MongoDB (Atlas or local)

1. Clone the repo:

```bash
git clone https://github.com/Ankitsarraf07/jan-tantra.git
cd jan-tantra
```

2. Server setup:

```bash
cd server
npm install
# create a .env file with the variables below
npm run seed     # optional: seed sample data
npm start
```

Required server environment variables (`server/.env`):

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `JWT_EXPIRE` — token expiry (e.g. `7d`)
- `CLIENT_URL` — the frontend origin (optional)

3. Client setup (development):

```bash
cd client
npm install
npm run dev
```

Open: http://localhost:5173

## Deploying the client to GitHub Pages

The client is configured to deploy to GitHub Pages under `/jan-tantra/`.

From the `client` folder:

```bash
npm install
npm run deploy
```

This uses `gh-pages` and publishes the `dist` folder to the `gh-pages` branch.

If you prefer GitHub Actions, add a workflow to build & publish on push to `main`.

## Deploying the server

Common hosts: Heroku, Railway, Render, DigitalOcean App Platform.

- Set the required environment variables on your host.
- Start command: `npm start` (server uses `process.env.PORT`).
- Ensure your MongoDB is reachable from the host.

## Project structure

- `client/` — React frontend (Vite)
- `server/` — Express backend and API
- `server/seed/` — seeder helper for initial data

## Notes

- The frontend uses `HashRouter` to be compatible with static hosting (GitHub Pages).
- CORS origins are configurable via `CLIENT_URL` or `CORS_ORIGINS` in the server env.

## Contributing

PRs and issues are welcome. Please open an issue for discussion before making large changes.

## License

MIT
