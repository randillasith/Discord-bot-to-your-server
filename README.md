# Discord-bot-to-your-server

setting up an OAuth2 URL for adding your Discord bot to a server, the redirect URI (URL) is optional but can be useful if you want to redirect users to a specific page after they have authorized your bot

**Set up a web server to handle the OAuth2 flow:**

You need to set up a server to handle the OAuth2 authorization code grant. This server will receive the authorization code from Discord, exchange it for an access token, and complete the OAuth2 flow.

**Install necessary packages:**

First, you need to install Node.js, Express, and Axios (for making HTTP requests). You can install these packages using npm:

```bash
npm install express axios

```


Replace `YOUR_BOT_CLIENT_ID`, `YOUR_BOT_CLIENT_SECRET`, and `http://localhost:3000/callback` with your actual client ID, client secret, and redirect URI. The client secret can be found in the Discord Developer Portal under the "OAuth2" section for your application.


**Run the server:**

```bash
node app.js

```
**Test the OAuth2 flow:**

*Open your browser and go to `http://localhost:3000`*


*Click on the "Invite Bot to Server" link, authorize the bot, and you will be redirected to `http://localhost:3000/callback` with an authorization code.*


*The server will exchange the code for an access token and complete the OAuth2 flow.*
