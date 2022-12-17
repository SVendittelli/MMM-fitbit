# FitbitWebApiExplorer.SleepApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSleep**](SleepApi.md#addSleep) | **POST** /1.2/user/-/sleep.json | Log Sleep
[**deleteSleep**](SleepApi.md#deleteSleep) | **DELETE** /1.2/user/-/sleep/{log-id}.json | Delete Sleep Log
[**getSleepByDate**](SleepApi.md#getSleepByDate) | **GET** /1.2/user/-/sleep/date/{date}.json | Get Sleep Log
[**getSleepByDateRange**](SleepApi.md#getSleepByDateRange) | **GET** /1.2/user/-/sleep/date/{base-date}/{end-date}.json | Get Sleep Logs by Date Range
[**getSleepGoal**](SleepApi.md#getSleepGoal) | **GET** /1.2/user/-/sleep/goal.json | Get Sleep Goal
[**getSleepList**](SleepApi.md#getSleepList) | **GET** /1.2/user/-/sleep/list.json | Get Sleep Logs List
[**updateSleepGoal**](SleepApi.md#updateSleepGoal) | **POST** /1.2/user/-/sleep/goal.json | Update Sleep Goal



## addSleep

> addSleep(startTime, duration, date)

Log Sleep

Creates a log entry for a sleep event and returns a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
let startTime = "startTime_example"; // String | Start time includes hours and minutes in the format HH:mm.
let duration = 56; // Number | Duration in milliseconds.
let date = new Date("2013-10-20"); // Date | Log entry in the format yyyy-MM-dd.
apiInstance.addSleep(startTime, duration, date, (error, data, response) => {
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
 **startTime** | **String**| Start time includes hours and minutes in the format HH:mm. | 
 **duration** | **Number**| Duration in milliseconds. | 
 **date** | **Date**| Log entry in the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSleep

> deleteSleep(logId)

Delete Sleep Log

Deletes a user&#39;s sleep log entry with the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
let logId = "logId_example"; // String | The ID of the sleep log to be deleted.
apiInstance.deleteSleep(logId, (error, data, response) => {
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
 **logId** | **String**| The ID of the sleep log to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSleepByDate

> getSleepByDate(date)

Get Sleep Log

The Get Sleep Logs by Date endpoint returns a summary and list of a user&#39;s sleep log entries (including naps) as well as detailed sleep entry data for a given day.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
let date = new Date("2013-10-20"); // Date | The date of records to be returned. In the format yyyy-MM-dd.
apiInstance.getSleepByDate(date, (error, data, response) => {
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
 **date** | **Date**| The date of records to be returned. In the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSleepByDateRange

> getSleepByDateRange(baseDate, endDate)

Get Sleep Logs by Date Range

The Get Sleep Logs by Date Range endpoint returns a list of a user&#39;s sleep log entries (including naps) as well as detailed sleep entry data for a given date range (inclusive of start and end dates).

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
let baseDate = new Date("2013-10-20"); // Date | The date of records to be returned. In the format yyyy-MM-dd.
let endDate = new Date("2013-10-20"); // Date | The date of records to be returned. In the format yyyy-MM-dd.
apiInstance.getSleepByDateRange(baseDate, endDate, (error, data, response) => {
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
 **baseDate** | **Date**| The date of records to be returned. In the format yyyy-MM-dd. | 
 **endDate** | **Date**| The date of records to be returned. In the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSleepGoal

> getSleepGoal()

Get Sleep Goal

Returns the user&#39;s sleep goal.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
apiInstance.getSleepGoal((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSleepList

> getSleepList(sort, offset, limit, opts)

Get Sleep Logs List

The Get Sleep Logs List endpoint returns a list of a user&#39;s sleep logs (including naps) before or after a given day with offset, limit, and sort order.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
let sort = "sort_example"; // String | The sort order of entries by date asc (ascending) or desc (descending).
let offset = 0; // Number | The offset number of entries.
let limit = 56; // Number | The maximum number of entries returned (maximum;100).
let opts = {
  'beforeDate': new Date("2013-10-20"), // Date | The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
  'afterDate': new Date("2013-10-20") // Date | The date in the format yyyy-MM-ddTHH:mm:ss.
};
apiInstance.getSleepList(sort, offset, limit, opts, (error, data, response) => {
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
 **sort** | **String**| The sort order of entries by date asc (ascending) or desc (descending). | 
 **offset** | **Number**| The offset number of entries. | [default to 0]
 **limit** | **Number**| The maximum number of entries returned (maximum;100). | 
 **beforeDate** | **Date**| The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified. | [optional] 
 **afterDate** | **Date**| The date in the format yyyy-MM-ddTHH:mm:ss. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateSleepGoal

> updateSleepGoal(minDuration)

Update Sleep Goal

Create or update the user&#39;s sleep goal and get a response in the JSON format.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SleepApi();
let minDuration = "minDuration_example"; // String | Duration of sleep goal.
apiInstance.updateSleepGoal(minDuration, (error, data, response) => {
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
 **minDuration** | **String**| Duration of sleep goal. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

