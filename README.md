# CommunityMarketPlacxe

CommunityMarketPlacxe is a server-rendered Node.js marketplace application built around community-managed shopping and vendor catalogs. It supports community admins, community users, vendors, shopping carts, order placement, and group-order aggregation.

## Features
- Community and vendor user types with separate dashboards
- Server-side rendered UI using EJS templates
- Shopping cart per user with add/remove/update and order placement
- Group-order creation (admin aggregates active carts into a GroupOrder)
- Vendor item management and per-item inventory tracking
- Session-based authentication with sessions stored in MongoDB (connect-mongo)

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- EJS templating
- Multer for file uploads
- Deployed via Render (render.yaml present) or run locally

## Quick Start

Prerequisites:
- Node.js (16+ recommended)
- MongoDB (or a MongoDB Atlas connection)

Create a `.env` (or set environment vars) with at minimum:

- `MONGO_URI` — MongoDB connection string
- `SESSION_SECRET` — session signing secret

Install and run locally:

```bash
npm install
# start in development (uses app.js)
npm run dev

# or run production-like server (server.js)
node server.js
```

Note: The repo includes `scripts/optimize-for-production.js` which validates `MONGO_URI` and `SESSION_SECRET` during production builds.

## Configuration / Environment
- `MONGO_URI` — required
- `SESSION_SECRET` — required and must be stable across server restarts for session continuity
- Optional: other provider credentials for email/SMS if integrating notification providers

## Important Files and Where to Look
- App entry / Express setup: [app.js](app.js)
- Production entry / process monitoring: [server.js](server.js)
- DB connection: [config/db.js](config/db.js)
- Routes: [routes/](routes/)
- Models: [models/](models/)
- Views (EJS): [views/](views/)
- Public static assets / client JS: [public/](public/)
- Deployment config: [render.yaml](render.yaml)
- Interview explanation: [INTERVIEW_EXPLANATION.md](INTERVIEW_EXPLANATION.md)
- Interview Q&A: [INTERVIEW_QA.md](INTERVIEW_QA.md)
- Notification stub: [utils/notificationService.js](utils/notificationService.js)

## Deployment Notes
- The project includes `render.yaml` for Render deployments.
- The `scripts/optimize-for-production.js` script verifies required env vars and injects a health check endpoint; ensure `MONGO_URI` and `SESSION_SECRET` are set in your deployment.

## Security Notes & Caveats
- The codebase currently stores `adminKey` in the `Community` model in plaintext — it should be hashed or replaced with proper role-based auth.
- Ensure `SESSION_SECRET` is long and secret; falling back to an in-repo default is insecure in production.
- Add CSRF protection for POST routes and validate/limit file uploads.
- Remove or protect any debug or backup routes before public deployments.

## Recommended Next Steps / Improvements
1. Hash or remove the plaintext `adminKey` and replace admin auth with role-based checks.
2. Add CSRF protection and re-check inputs for XSS/validation gaps.
3. Normalize category names and validate enum values in `models/VendorItem.js`.
4. Consider switching to JWTs or API tokens for API endpoints if you need stateless auth.

## Contributing
Open an issue or submit a PR. Please follow existing code style and run the app locally to verify your changes.

## License
TBD — add a license file if you plan to publish this repository publicly.

---

If you want, I can also: (a) run a quick npm install & start to verify the app boots locally, (b) create a minimal `.env.example`, or (c) prepare a short CHANGELOG for the repo. Which would you like next?
