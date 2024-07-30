const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Replace these values with your bot's client ID, client secret, and redirect URI
const clientId = 'YOUR_BOT_CLIENT_ID';
const clientSecret = 'YOUR_BOT_CLIENT_SECRET';
const redirectUri = 'http://localhost:3000/callback';

// Generate the OAuth2 URL
function generateOAuth2URL(clientId, redirectUri) {
  const encodedRedirectUri = encodeURIComponent(redirectUri);
  return `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=8&response_type=code&redirect_uri=${encodedRedirectUri}`;
}

app.get('/', (req, res) => {
  const oauth2URL = generateOAuth2URL(clientId, redirectUri);
  res.send(`<a href="${oauth2URL}">Invite Bot to Server</a>`);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.send('No code provided');
  }

  try {
    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const accessToken = tokenResponse.data.access_token;
    res.send(`Authorization complete! Access token: ${accessToken}`);
  } catch (error) {
    res.send('Error during authorization: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
