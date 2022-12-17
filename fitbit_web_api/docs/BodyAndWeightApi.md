# FitbitWebApiExplorer.BodyAndWeightApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBodyFatLog**](BodyAndWeightApi.md#addBodyFatLog) | **POST** /1/user/-/body/log/fat.json | Log Body Fat
[**addWeightLog**](BodyAndWeightApi.md#addWeightLog) | **POST** /1/user/-/body/log/weight.json | Log Weight
[**deleteBodyFatLog**](BodyAndWeightApi.md#deleteBodyFatLog) | **DELETE** /1/user/-/body/log/fat/{body-fat-log-id}.json | Delete Body Fat Log
[**deleteWeightLog**](BodyAndWeightApi.md#deleteWeightLog) | **DELETE** /1/user/-/body/log/weight/{body-weight-log-id}.json | Delete Weight Log
[**getBodyFatByDate**](BodyAndWeightApi.md#getBodyFatByDate) | **GET** /1/user/-/body/log/fat/date/{date}.json | Get Body Fat Logs
[**getBodyFatByDatePeriod**](BodyAndWeightApi.md#getBodyFatByDatePeriod) | **GET** /1/user/-/body/log/fat/date/{date}/{period}.json | Get Body Fat Logs
[**getBodyFatByDateRange**](BodyAndWeightApi.md#getBodyFatByDateRange) | **GET** /1/user/-/body/log/fat/date/{base-date}/{end-date}.json | Get Body Fat Logs
[**getBodyGoals**](BodyAndWeightApi.md#getBodyGoals) | **GET** /1/user/-/body/log/{goal-type}/goal.json | Get Body Goals
[**getWeightByDate**](BodyAndWeightApi.md#getWeightByDate) | **GET** /1/user/-/body/log/weight/date/{date}.json | Get Weight Logs
[**getWeightByDatePeriod**](BodyAndWeightApi.md#getWeightByDatePeriod) | **GET** /1/user/-/body/log/weight/date/{date}/{period}.json | Get Body Fat Logs
[**getWeightByDateRange**](BodyAndWeightApi.md#getWeightByDateRange) | **GET** /1/user/-/body/log/weight/date/{base-date}/{end-date}.json | Get Body Fat Logs
[**updateBodyFatGoal**](BodyAndWeightApi.md#updateBodyFatGoal) | **POST** /1/user/-/body/log/fat/goal.json | Update Body Fat Goal
[**updateWeightGoal**](BodyAndWeightApi.md#updateWeightGoal) | **POST** /1/user/-/body/log/weight/goal.json | Update Weight Goal



## addBodyFatLog

> addBodyFatLog(fat, date, time)

Log Body Fat

Creates a log entry for body fat and returns a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let fat = 56; // Number | Body fat in the format of X.XX in the unit system that corresponds to the Accept-Language header provided.
let date = new Date("2013-10-20"); // Date | Log entry date in the format yyyy-MM-dd.
let time = "time_example"; // String | Time of the measurement in hours and minutes in the format HH:mm:ss that is set to the last second of the day if not provided.
apiInstance.addBodyFatLog(fat, date, time, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fat** | **Number**| Body fat in the format of X.XX in the unit system that corresponds to the Accept-Language header provided. | 
 **date** | **Date**| Log entry date in the format yyyy-MM-dd. | 
 **time** | **String**| Time of the measurement in hours and minutes in the format HH:mm:ss that is set to the last second of the day if not provided. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addWeightLog

> addWeightLog(weight, date, opts)

Log Weight

Creates log entry for a body weight using units in the unit systems that corresponds to the Accept-Language header provided and gets a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let weight = 56; // Number | Weight in the format of X.XX.
let date = new Date("2013-10-20"); // Date | Log entry date in the format yyyy-MM-dd.
let opts = {
  'time': "time_example" // String | Time of the measurement; hours and minutes in the format of HH:mm:ss, which is set to the last second of the day if not provided.
};
apiInstance.addWeightLog(weight, date, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **weight** | **Number**| Weight in the format of X.XX. | 
 **date** | **Date**| Log entry date in the format yyyy-MM-dd. | 
 **time** | **String**| Time of the measurement; hours and minutes in the format of HH:mm:ss, which is set to the last second of the day if not provided. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBodyFatLog

> deleteBodyFatLog(bodyFatLogId)

Delete Body Fat Log

Deletes a user&#39;s body fat log entry with the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let bodyFatLogId = 56; // Number | The ID of the body fat log entry.
apiInstance.deleteBodyFatLog(bodyFatLogId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyFatLogId** | **Number**| The ID of the body fat log entry. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWeightLog

> deleteWeightLog(bodyWeightLogId)

Delete Weight Log

Deletes a user&#39;s body weight log entrywith the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let bodyWeightLogId = 56; // Number | The ID of the body weight log entry.
apiInstance.deleteWeightLog(bodyWeightLogId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyWeightLogId** | **Number**| The ID of the body weight log entry. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBodyFatByDate

> getBodyFatByDate(date)

Get Body Fat Logs

Retreives a list of all user&#39;s body fat log entries for a given day in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd.
apiInstance.getBodyFatByDate(date, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date in the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBodyFatByDatePeriod

> getBodyFatByDatePeriod(date, period)

Get Body Fat Logs

Retreives a list of all user&#39;s body fat log entries for a given day in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd.
let period = "period_example"; // String | The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
apiInstance.getBodyFatByDatePeriod(date, period, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date in the format yyyy-MM-dd. | 
 **period** | **String**| The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBodyFatByDateRange

> getBodyFatByDateRange(baseDate, endDate)

Get Body Fat Logs

Retreives a list of all user&#39;s body fat log entries for a given day in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let baseDate = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getBodyFatByDateRange(baseDate, endDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseDate** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBodyGoals

> getBodyGoals(goalType)

Get Body Goals

Retreives a user&#39;s current body fat percentage or weight goal using units in the unit systems that corresponds to the Accept-Language header providedin the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let goalType = "goalType_example"; // String | weight or fat.
apiInstance.getBodyGoals(goalType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalType** | **String**| weight or fat. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWeightByDate

> getWeightByDate(date)

Get Weight Logs

Retreives a list of all user&#39;s body weight log entries for a given day using units in the unit systems which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd.
apiInstance.getWeightByDate(date, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date in the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWeightByDatePeriod

> getWeightByDatePeriod(date, period)

Get Body Fat Logs

Retreives a list of all user&#39;s body weight log entries for a given day in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd.
let period = "period_example"; // String | The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
apiInstance.getWeightByDatePeriod(date, period, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date in the format yyyy-MM-dd. | 
 **period** | **String**| The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWeightByDateRange

> getWeightByDateRange(baseDate, endDate)

Get Body Fat Logs

Retreives a list of all user&#39;s body fat log entries for a given day in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let baseDate = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getWeightByDateRange(baseDate, endDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseDate** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateBodyFatGoal

> updateBodyFatGoal(fat)

Update Body Fat Goal

Updates user&#39;s fat percentage goal.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let fat = "fat_example"; // String | Target body fat percentage; in the format X.XX.
apiInstance.updateBodyFatGoal(fat, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fat** | **String**| Target body fat percentage; in the format X.XX. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateWeightGoal

> updateWeightGoal(startDate, startWeight, opts)

Update Weight Goal

Updates user&#39;s fat percentage goal.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightApi();
let startDate = "startDate_example"; // String | Weight goal start date; in the format yyyy-MM-dd.
let startWeight = "startWeight_example"; // String | Weight goal start weight; in the format X.XX, in the unit systems that corresponds to the Accept-Language header provided.
let opts = {
  'weight': "weight_example" // String | Weight goal target weight; in the format X.XX, in the unit systems that corresponds to the Accept-Language header provided; required if user doesn't have an existing weight goal.
};
apiInstance.updateWeightGoal(startDate, startWeight, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Weight goal start date; in the format yyyy-MM-dd. | 
 **startWeight** | **String**| Weight goal start weight; in the format X.XX, in the unit systems that corresponds to the Accept-Language header provided. | 
 **weight** | **String**| Weight goal target weight; in the format X.XX, in the unit systems that corresponds to the Accept-Language header provided; required if user doesn&#39;t have an existing weight goal. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

