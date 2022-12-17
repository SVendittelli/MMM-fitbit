/**
 * Fitbit Web API Explorer
 * Fitbit provides a Web API for accessing data from Fitbit activity trackers, Aria scale, and manually entered logs. Anyone can develop an application to access and modify a Fitbit user's data on their behalf, so long as it complies with Fitbit Platform Terms of Service. These Swagger UI docs do not currently support making Fitbit API requests directly. In order to make a request, construct a request for the appropriate endpoint using this documentation, and then add an Authorization header to each request with an access token obtained using the steps outlined here: https://dev.fitbit.com/build/reference/web-api/developer-guide/authorization/.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* ActivityIntradayTimeSeries service.
* @module api/ActivityIntradayTimeSeriesApi
* @version 1
*/
export default class ActivityIntradayTimeSeriesApi {

    /**
    * Constructs a new ActivityIntradayTimeSeriesApi. 
    * @alias module:api/ActivityIntradayTimeSeriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getActivitiesResourceByDateIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Intraday Time Series
     * Returns the Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} date The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min. Optional.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getActivitiesResourceByDateIntraday(resourcePath, date, detailLevel, callback) {
      let postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateIntraday");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesResourceByDateIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateIntraday");
      }

      let pathParams = {
        'resource-path': resourcePath,
        'date': date,
        'detail-level': detailLevel
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/1/user/-/activities/{resource-path}/date/{date}/1d/{detail-level}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivitiesResourceByDateRangeIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Intraday Time Series
     * Returns the Activity Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} baseDate The date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min. Optional.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getActivitiesResourceByDateRangeIntraday(resourcePath, baseDate, endDate, detailLevel, callback) {
      let postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateRangeIntraday");
      }
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getActivitiesResourceByDateRangeIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getActivitiesResourceByDateRangeIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateRangeIntraday");
      }

      let pathParams = {
        'resource-path': resourcePath,
        'base-date': baseDate,
        'end-date': endDate,
        'detail-level': detailLevel
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/1/user/-/activities/{resource-path}/date/{base-date}/{end-date}/{detail-level}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivitiesResourceByDateRangeTimeSeriesIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeTimeSeriesIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Intraday Time Series
     * Returns the Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} date The date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min.
     * @param {String} startTime The start of the period in the format HH:mm.
     * @param {String} endTime The end of the period in the format HH:mm.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeTimeSeriesIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getActivitiesResourceByDateRangeTimeSeriesIntraday(resourcePath, date, endDate, detailLevel, startTime, endTime, callback) {
      let postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }

      let pathParams = {
        'resource-path': resourcePath,
        'date': date,
        'end-date': endDate,
        'detail-level': detailLevel,
        'start-time': startTime,
        'end-time': endTime
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/1/user/-/activities/{resource-path}/date/{date}/{end-date}/{detail-level}/time/{start-time}/{end-time}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivitiesResourceByDateTimeSeriesIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateTimeSeriesIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Intraday Time Series
     * Returns the Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} date The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min.
     * @param {String} startTime The start of the period in the format HH:mm.
     * @param {String} endTime The end of the period in the format HH:mm.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateTimeSeriesIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getActivitiesResourceByDateTimeSeriesIntraday(resourcePath, date, detailLevel, startTime, endTime, callback) {
      let postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }

      let pathParams = {
        'resource-path': resourcePath,
        'date': date,
        'detail-level': detailLevel,
        'start-time': startTime,
        'end-time': endTime
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/1/user/-/activities/{resource-path}/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
