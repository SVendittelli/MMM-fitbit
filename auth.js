const fitbitWebApi = require('fitbit_web_api');

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

const express = require('express');
const open = require('open');
const querystring = require('querystring');
const fs = require('fs');


let apiInstance = new fitbitWebApi.AuthApi();

const scope = "activity nutrition heartrate location nutrition profile settings sleep social weight"
const redirectUri = 'http://127.0.0.1:8888/';

const oauth2Endpoint = 'https://www.fitbit.com/oauth2/authorize';

// Generate a random string for the state parameter
// to protect against cross-site request forgery (CSRF) attacks.
const state = Math.random().toString(36).substring(2);

const app = express();

// Function to request an access token using the authorization code
async function requestAccessToken(authCode) {
  const authorization = "Basic " + btoa(`${fitbitClientId}:${fitbitClientSecret}`);

  const opts = {
    'authorization': authorization,
    'code': authCode,
    'redirectUri': redirectUri,
    'state': state
  };

  apiInstance.oauthToken(fitbitClientId, "authorization_code", opts, (error, data, response) => {
    if (error) {
      console.error(error);
      return;
    }

    data = {
      "ACC_TOK": response.body.access_token,
      "REF_TOK": response.body.refresh_token,
      "EXPIRES_AT": response.body.expires_in,
    }

    let tokenFile = `tokens-${fitbitClientId}.json`

    fs.writeFileSync(tokenFile, JSON.stringify(data));
    console.log(`Saved access token data to ${tokenFile}!`);

    process.exit();
  });
}

app.get('/', (req, res) => {
  const authCode = req.query.code;
  console.log(`Received authorization code: ${authCode}`);

  res.send('Authorization successful! You can now close this window.');

  console.log(`Requesting an access token using the authorization code...`);
  requestAccessToken(authCode);
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
