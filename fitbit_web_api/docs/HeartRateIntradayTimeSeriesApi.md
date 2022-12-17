# FitbitWebApiExplorer.HeartRateIntradayTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHeartByDateIntraday**](HeartRateIntradayTimeSeriesApi.md#getHeartByDateIntraday) | **GET** /1/user/-/activities/heart/date/{date}/1d/{detail-level}.json | Get Heart Rate Intraday Time Series
[**getHeartByDateRangeIntraday**](HeartRateIntradayTimeSeriesApi.md#getHeartByDateRangeIntraday) | **GET** /1/user/-/activities/heart/date/{date}/{end-date}/{detail-level}.json | Get Heart Rate Intraday Time Series
[**getHeartByDateRangeTimestampIntraday**](HeartRateIntradayTimeSeriesApi.md#getHeartByDateRangeTimestampIntraday) | **GET** /1/user/-/activities/heart/date/{date}/{end-date}/{detail-level}/time/{start-time}/{end-time}.json | Get Heart Rate Intraday Time Series
[**getHeartByDateTimestampIntraday**](HeartRateIntradayTimeSeriesApi.md#getHeartByDateTimestampIntraday) | **GET** /1/user/-/activities/heart/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json | Get Heart Rate Intraday Time Series



## getHeartByDateIntraday

> getHeartByDateIntraday(date, detailLevel)

Get Heart Rate Intraday Time Series

Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateIntradayTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | The number of data points to include either 1sec, 1min, 5min or 15min.
apiInstance.getHeartByDateIntraday(date, detailLevel, (error, data, response) => {
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
 **date** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **detailLevel** | **String**| The number of data points to include either 1sec, 1min, 5min or 15min. | [default to &#39;1min&#39;]

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getHeartByDateRangeIntraday

> getHeartByDateRangeIntraday(date, endDate, detailLevel)

Get Heart Rate Intraday Time Series

Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateIntradayTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date in the format of yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | The number of data points to include either 1sec, 1min, 5min or 15min.
apiInstance.getHeartByDateRangeIntraday(date, endDate, detailLevel, (error, data, response) => {
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
 **date** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date in the format of yyyy-MM-dd or today. | 
 **detailLevel** | **String**| The number of data points to include either 1sec, 1min, 5min or 15min. | [default to &#39;1min&#39;]

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getHeartByDateRangeTimestampIntraday

> getHeartByDateRangeTimestampIntraday(date, endDate, detailLevel, startTime, endTime)

Get Heart Rate Intraday Time Series

Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateIntradayTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date in the format of yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | The number of data points to include either 1sec, 1min, 5min or 15min.
let startTime = "startTime_example"; // String | The start of the period in the format of HH:mm.
let endTime = "endTime_example"; // String | The end time of the period in the format of HH:mm.
apiInstance.getHeartByDateRangeTimestampIntraday(date, endDate, detailLevel, startTime, endTime, (error, data, response) => {
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
 **date** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date in the format of yyyy-MM-dd or today. | 
 **detailLevel** | **String**| The number of data points to include either 1sec, 1min, 5min or 15min. | [default to &#39;1min&#39;]
 **startTime** | **String**| The start of the period in the format of HH:mm. | 
 **endTime** | **String**| The end time of the period in the format of HH:mm. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getHeartByDateTimestampIntraday

> getHeartByDateTimestampIntraday(date, detailLevel, startTime, endTime)

Get Heart Rate Intraday Time Series

Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateIntradayTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | The number of data points to include either 1sec, 1min, 5min or 15min.
let startTime = "startTime_example"; // String | The start of the period in the format of HH:mm.
let endTime = "endTime_example"; // String | The end time of the period in the format of HH:mm.
apiInstance.getHeartByDateTimestampIntraday(date, detailLevel, startTime, endTime, (error, data, response) => {
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
 **date** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **detailLevel** | **String**| The number of data points to include either 1sec, 1min, 5min or 15min. | [default to &#39;1min&#39;]
 **startTime** | **String**| The start of the period in the format of HH:mm. | 
 **endTime** | **String**| The end time of the period in the format of HH:mm. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

