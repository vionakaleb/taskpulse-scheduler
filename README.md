# TaskPulse Scheduler

This is a lightweight Cloudflare Worker designed to keep the TaskPulse bot (hosted on Render) awake by sending a health-check ping every 14 minutes.

## 🚀 Deployment

### Prerequisites
- A Cloudflare account
- Node.js installed

### Installation & Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Authenticate with Cloudflare:
   ```bash
   npx wrangler login
   ```

3. Deploy to Cloudflare:
   ```bash
   npm run deploy
   ```

## ⚙️ Configuration

- **Schedule:** The worker is configured to run every 14 minutes via the `wrangler.toml` cron trigger: `*/14 * * * *`.
- **Target URL:** The worker pings `https://taskpulse-bot-r5zy.onrender.com/health`.

## 📁 Project Structure
- `src/index.js`: The worker logic.
- `wrangler.toml`: Cloudflare configuration and cron settings.
- `package.json`: Project dependencies and scripts.
