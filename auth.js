const express = require('express');
const open = require('open');
const querystring = require('querystring');

require('dotenv').config();

const fitbitClientId = process.env.FITBIT_CLIENT_ID;
const fitbitClientSecret = process.env.FITBIT_CLIENT_SECRET;

if (!fitbitClientId) {
  console.error('FITBIT_CLIENT_ID environment variable is not set');
  process.exit(1);
}

if (!fitbitClientSecret) {
  console.error('FITBIT_CLIENT_SECRET environment variable is not set');
  process.exit(1);
}

const scope = "activity nutrition heartrate location nutrition profile settings sleep social weight"
const redirectUri = 'http://127.0.0.1:8888/';

const oauth2Endpoint = 'https://www.fitbit.com/oauth2/authorize';

// Generate a random string for the state parameter
// to protect against cross-site request forgery (CSRF) attacks.
const state = Math.random().toString(36).substring(2);

const app = express();

// Function to request an access token using the authorization code
// TODO: replace with 'Auth Api . oauthToken'
async function requestAccessToken(authCode) {
  const requestUrl = 'https://www.fitbit.com/oauth2/token';

  const requestBody = {
    grant_type: 'authorization_code',
    client_id: fitbitClientId,
    client_secret: fitbitClientSecret,
    code: authCode,
    redirect_uri: redirectUri,
  };

  const encodedRequestBody = querystring.stringify(requestBody);

  console.log(encodedRequestBody);

  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encodedRequestBody,
  });

  if (response.status !== 200) {
    console.error(`Error requesting access token: ${response.statusText}`);
    return;
  }

  const responseJson = await response.json();
  const accessToken = responseJson.access_token;
  console.log(`Access token: ${accessToken}`);
}

// requestAccessToken("ffe68de25a4f75e126c7f3429ab943e19d1256e6")

app.get('/', (req, res) => {
  const authCode = req.query.code;
  console.log(`Received authorization code: ${authCode}`);

  res.send('Authorization successful! You can now close this window.');

  // Request an access token using the authorization code
  requestAccessToken(authCode);

  // app.close();
});


// Function to open the authorization URL in a new window
function openAuthorizationUrl() {
  const authorizationUrl =
    oauth2Endpoint +
    '?response_type=code' +
    '&client_id=' + encodeURIComponent(fitbitClientId) +
    '&redirect_uri=' + encodeURIComponent(redirectUri) +
    '&scope=' + encodeURIComponent(scope) +
    '&state=' + encodeURIComponent(state);
  open(authorizationUrl, '_blank');
}


app.listen(8888, () => {
  console.log('Listening on port 8888...');

  openAuthorizationUrl()
});
