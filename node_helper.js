/* Magic Mirror
 * Node Helper: MMM-Fitbit2
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
const fitbitWebApi = require('fitbit_web_api');
const fs = require('fs');
const os = require('os');
const path = require('path');

let debugMode = false;
let clientId = null;

module.exports = NodeHelper.create({

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === "GET DATA") {
      console.log("MMM-Fitbit2: " + payload.trigger + " request to get data received");
      this.getData(payload.config);
    }
  },

  setTokenClientId: function(idToSet) {
    if (!idToSet) {
      throw new Error('idToSet must not be null or undefined');
    }
    console.log(`Setting client ID to ${idToSet}`);
    clientId = idToSet;
  },

  tokensFilename: function() {
    if (!clientId) {
      throw new Error('clientId must not be null or undefined');
    }
    return `tokens-${clientId}.json`;
  },

  tokensFilepath: function() {
    return `${this.path}/${this.tokensFilename()}`;
  },

  tokensFileExists: function() {
    return fs.existsSync(this.tokensFilepath())
  },

  readTokens: function() {
    console.log("Attempting to read tokens");

    if (!this.tokensFileExists()) {
      console.error(`'${this.tokensFilename()}' does not exist`);
      process.exit(1);
    }

    console.log(`Reading from '${this.tokensFilename()}'`);

    let AccToken = null;
    let RefToken = null;
    let Expires = null;

    try {
      const data = JSON.parse(fs.readFileSync(this.tokensFilepath()));
      AccToken = data["ACC_TOK"];
      RefToken = data["REF_TOK"];
      Expires = data["EXPIRES_AT"];
    } catch (error) {
      console.error(`Cannot read '${this.tokensFilename()}'`);
      process.exit(1);
    }

    if (!AccToken) {
      console.error(`Cannot read access_token from '${this.tokensFilename()}'`);
      process.exit(1);
    }

    if (!RefToken) {
      console.error(`Cannot read refresh_token from '${this.tokensFilename()}'`);
      process.exit(1);
    }

    if (!Expires) {
      console.error(`Cannot read expires_at from '${this.tokensFilename()}'`);
      process.exit(1);
    }

    console.log("Tokens read successfully");
    return {AccToken, RefToken, Expires};
  },

  writeTokens: function(AccToken, RefToken, Expires = null) {
    console.log("Attempting to write tokens");

    console.log(`Writing tokens to '${this.tokensFilename()}'`);

    const debug_print_out = `Writing access token: '${AccToken}', refresh token: '${RefToken}' and expiry Unix timestamp: '${Expires}'`;
    console.log(debug_print_out);

    const data = {
      ACC_TOK: AccToken,
      REF_TOK: RefToken,
      EXPIRES_AT: Expires,
    };

    fs.writeFileSync(this.tokensFilepath(), JSON.stringify(data));

    console.log("Tokens written successfully");
  },

  sendDataMessageSocketNotification: function (error, data, response) {
    if (error) {
      console.error(error);
      return;
    }

    message = {
      "values": {
        "data": response._body.summary.caloriesOut,
        "goal": response._body.goals.caloriesOut
      },
      "resource": "caloriesOut",
      "clientId": clientId
    }
    console.log("Sending socket notification...")
    this.sendSocketNotification("API_DATA_RECEIVED", message);
    console.log("Sent socket notification!")

    // TODO: only start fading in when ALL values are ready!
    this.sendSocketNotification("UPDATE_VIEW", "Finished getting data from Fitbit API");
  },

  getData: function (config) {
    const self = this;
    this.setTokenClientId(config.credentials.clientId);

    // if (config.test) {
    //  TODO: get from test/test_data.json
    // }

    if (config.debug) {
      console.log("MMM-Fitbit2: Data to receive: " + JSON.stringify(config));
    }

    // TODO: replace https://github.com/m-roberts/MMM-Fitbit2/blob/master/python/get_data.py
 
    const tokens = this.readTokens();

    let apiClient = new fitbitWebApi.ApiClient()
    apiClient.authentications['oauth2'].type = 'bearer'
    apiClient.authentications['oauth2'].accessToken = tokens.AccToken

    let activityApiInstance = new fitbitWebApi.ActivityApi(apiClient);
  
    activityApiInstance.getActivitiesByDate("2022-12-18", (error, data, response) => {
      self.sendDataMessageSocketNotification(error, data, response)
    })

    // ActiveZoneMinutesIntradayTimeSeriesApi
    // ActiveZoneMinutesTimeSeriesApi
    // ActivityApi
    // ActivityIntradayTimeSeriesApi
    // ActivityTimeSeriesApi
    // BodyAndWeightApi
    // BodyAndWeightTimeSeriesApi
    // BreathingRateApi
    // BreathingRateIntradayApi
    // CardioFitnessScoreVO2MaxApi
    // DevicesApi
    // ElectrocardiogramApi
    // FoodAndWaterApi
    // FoodAndWaterTimeSeriesApi
    // FriendsApi
    // HeartRateIntradayTimeSeriesApi
    // HeartRateTimeSeriesApi
    // HeartRateVariabilityApi
    // HeartRateVariabilityIntradayApi
    // SleepApi
    // SpO2Api
    // SpO2IntradayApi
    // SubscriptionsApi
    // TemperatureApi
    // UserApi

    console.log("MMM-Fitbit2: END API CALLS");
  }
});
