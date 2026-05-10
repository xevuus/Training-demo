# Strava Training Analyzer

AI-powered training analysis dashboard built with Strava OAuth + Claude API.

## Deploy to Railway

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/strava-analyzer.git
git push -u origin main
```

### 2. Create Railway project
1. Go to [railway.app](https://railway.app) and sign in
2. Click **New Project → Deploy from GitHub repo**
3. Select your `strava-analyzer` repo
4. Railway auto-detects Node.js and deploys

### 3. Set environment variables in Railway
Go to your project → **Variables** tab → add:

| Variable | Value |
|---|---|
| `STRAVA_CLIENT_ID` | From strava.com/settings/api |
| `STRAVA_CLIENT_SECRET` | From strava.com/settings/api |
| `APP_URL` | Your Railway URL (e.g. `https://strava-analyzer-production.up.railway.app`) |

### 4. Configure Strava app
1. Go to [strava.com/settings/api](https://www.strava.com/settings/api)
2. Set **Authorization Callback Domain** to your Railway domain:
   `strava-analyzer-production.up.railway.app` (no https://, no trailing slash)

### 5. Done!
Visit your Railway URL — click **Connect with Strava** and authorize.

## Local development
```bash
npm install
cp .env.example .env   # fill in your values
node server.js
# Visit http://localhost:3000
# Set APP_URL=http://localhost:3000 in .env
# Set Strava callback domain to: localhost
```

## How it works
1. User clicks "Connect with Strava"
2. Server redirects to Strava OAuth (`/auth/strava`)
3. Strava redirects back to `/callback` with an auth code
4. Server exchanges code + Client Secret for an access token (never exposed to browser)
5. Server redirects to frontend with token in URL param
6. Frontend stores token in localStorage and fetches activities directly from Strava API
7. Claude API provides AI coaching insights
