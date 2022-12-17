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
* BodyAndWeightTimeSeries service.
* @module api/BodyAndWeightTimeSeriesApi
* @version 1
*/
export default class BodyAndWeightTimeSeriesApi {

    /**
    * Constructs a new BodyAndWeightTimeSeriesApi. 
    * @alias module:api/BodyAndWeightTimeSeriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getBodyResourceByDatePeriod operation.
     * @callback module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDatePeriodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Time Series
     * Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.
     * @param {module:model/String} resourcePath The resource path, which incudes the bmi, fat, or weight options.
     * @param {Date} date The range start date in the format yyyy-MM-dd or today.
     * @param {String} period The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
     * @param {module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDatePeriodCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getBodyResourceByDatePeriod(resourcePath, date, period, callback) {
      let postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getBodyResourceByDatePeriod");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getBodyResourceByDatePeriod");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getBodyResourceByDatePeriod");
      }

      let pathParams = {
        'resource-path': resourcePath,
        'date': date,
        'period': period
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
        '/1/user/-/body/{resource-path}/date/{date}/{period}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBodyResourceByDateRange operation.
     * @callback module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDateRangeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Time Series
     * Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.
     * @param {module:model/String} resourcePath The resource path, which incudes the bmi, fat, or weight options.
     * @param {Date} baseDate The range start date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The end date of the range.
     * @param {module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDateRangeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getBodyResourceByDateRange(resourcePath, baseDate, endDate, callback) {
      let postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getBodyResourceByDateRange");
      }
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getBodyResourceByDateRange");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getBodyResourceByDateRange");
      }

      let pathParams = {
        'resource-path': resourcePath,
        'base-date': baseDate,
        'end-date': endDate
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
        '/1/user/-/body/{resource-path}/date/{base-date}/{end-date}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
