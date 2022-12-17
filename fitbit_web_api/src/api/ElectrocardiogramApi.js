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
* Electrocardiogram service.
* @module api/ElectrocardiogramApi
* @version 1
*/
export default class ElectrocardiogramApi {

    /**
    * Constructs a new ElectrocardiogramApi. 
    * @alias module:api/ElectrocardiogramApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEcgLogList operation.
     * @callback module:api/ElectrocardiogramApi~getEcgLogListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ECG Log List
     * This endpoint is used for querying the user's on-device ECG readings.
     * @param {String} sort The sort order of entries by date asc (ascending) or desc (descending).
     * @param {Number} offset The offset number of entries.
     * @param {Number} limit The maximum number of entries returned (maximum;10).
     * @param {Object} opts Optional parameters
     * @param {Date} opts.beforeDate The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
     * @param {Date} opts.afterDate The date in the format yyyy-MM-ddTHH:mm:ss.
     * @param {module:api/ElectrocardiogramApi~getEcgLogListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getEcgLogList(sort, offset, limit, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling getEcgLogList");
      }
      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getEcgLogList");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getEcgLogList");
      }

      let pathParams = {
      };
      let queryParams = {
        'beforeDate': opts['beforeDate'],
        'afterDate': opts['afterDate'],
        'sort': sort,
        'offset': offset,
        'limit': limit
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
        '/1/user/-/ecg/list.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
