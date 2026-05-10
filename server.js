const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

app.use(express.static(path.join(__dirname, 'public')));

// Redirect user to Strava authorization page
app.get('/auth/strava', (req, res) => {
  const redirectUri = `${process.env.APP_URL}/callback`;
  const scope = 'read,activity:read_all';
  const url = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;
  res.redirect(url);
});

// Strava OAuth callback — exchanges code for token, redirects to frontend
app.get('/callback', async (req, res) => {
  const { code, error } = req.query;

  if (error) {
    return res.redirect(`/?error=${encodeURIComponent(error)}`);
  }
  if (!code) {
    return res.redirect('/?error=missing_code');
  }

  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();

    if (!data.access_token) {
      console.error('Token exchange failed:', data);
      return res.redirect(`/?error=${encodeURIComponent(data.message || 'token_exchange_failed')}`);
    }

    // Pass token to frontend via URL fragment (never hits server logs)
    const athleteName = encodeURIComponent(`${data.athlete?.firstname || ''} ${data.athlete?.lastname || ''}`.trim());
    res.redirect(`/?token=${data.access_token}&athlete=${athleteName}&expires=${data.expires_at}`);
  } catch (err) {
    console.error('OAuth error:', err);
    res.redirect(`/?error=${encodeURIComponent('server_error')}`);
  }
});

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Strava Analyzer running on port ${PORT}`);
});
