# FitbitWebApiExplorer.ActiveZoneMinutesIntradayTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAZMByDateIntraday**](ActiveZoneMinutesIntradayTimeSeriesApi.md#getAZMByDateIntraday) | **GET** /1/user/-/activities/active-zone-minutes/date/{date}/1d/{detail-level}.json | Get AZM Intraday by Date
[**getAZMByDateTimeSeriesIntraday**](ActiveZoneMinutesIntradayTimeSeriesApi.md#getAZMByDateTimeSeriesIntraday) | **GET** /1/user/-/activities/active-zone-minutes/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json | Get AZM Intraday by Date
[**getAZMByIntervalIntraday**](ActiveZoneMinutesIntradayTimeSeriesApi.md#getAZMByIntervalIntraday) | **GET** /1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}/{detail-level}.json | Get AZM Intraday by Interval
[**getAZMByIntervalTimeSeriesIntraday**](ActiveZoneMinutesIntradayTimeSeriesApi.md#getAZMByIntervalTimeSeriesIntraday) | **GET** /1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}/time/{start-time}/{end-time}.json | Get AZM Intraday by Interval



## getAZMByDateIntraday

> getAZMByDateIntraday(date, detailLevel)

Get AZM Intraday by Date

Returns the active zone minutes intraday data for a 24 hour period by specifying a date and/or time range.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActiveZoneMinutesIntradayTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let detailLevel = "detailLevel_example"; // String | The detail for which data will be returned. **Supported:** 1min | 5min | 15min
apiInstance.getAZMByDateIntraday(date, detailLevel, (error, data, response) => {
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
 **date** | **Date**| The date in the format yyyy-MM-dd or today | 
 **detailLevel** | **String**| The detail for which data will be returned. **Supported:** 1min | 5min | 15min | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAZMByDateTimeSeriesIntraday

> getAZMByDateTimeSeriesIntraday(date, detailLevel, startTime, endTime)

Get AZM Intraday by Date

Returns the active zone minutes intraday data for a 24 hour period by specifying a date and/or time range.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActiveZoneMinutesIntradayTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let detailLevel = "detailLevel_example"; // String | The detail for which data will be returned. **Supported:** 1min | 5min | 15min
let startTime = "startTime_example"; // String | The start of the period in the format HH:mm.
let endTime = "endTime_example"; // String | The end of the period in the format HH:mm.
apiInstance.getAZMByDateTimeSeriesIntraday(date, detailLevel, startTime, endTime, (error, data, response) => {
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
 **date** | **Date**| The date in the format yyyy-MM-dd or today | 
 **detailLevel** | **String**| The detail for which data will be returned. **Supported:** 1min | 5min | 15min | 
 **startTime** | **String**| The start of the period in the format HH:mm. | 
 **endTime** | **String**| The end of the period in the format HH:mm. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAZMByIntervalIntraday

> getAZMByIntervalIntraday(startDate, endDate, detailLevel)

Get AZM Intraday by Interval

Returns the active zone minutes intraday data for a 24 hour period by specifying a date range and/or time range.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActiveZoneMinutesIntradayTimeSeriesApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let endDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let detailLevel = "detailLevel_example"; // String | The detail for which data will be returned. **Support:** 1min | 5min | 15min
apiInstance.getAZMByIntervalIntraday(startDate, endDate, detailLevel, (error, data, response) => {
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
 **startDate** | **Date**| The date in the format yyyy-MM-dd or today | 
 **endDate** | **Date**| The date in the format yyyy-MM-dd or today | 
 **detailLevel** | **String**| The detail for which data will be returned. **Support:** 1min | 5min | 15min | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAZMByIntervalTimeSeriesIntraday

> getAZMByIntervalTimeSeriesIntraday(startDate, endDate, detailLevel, startTime, endTime)

Get AZM Intraday by Interval

Returns the active zone minutes intraday data for a 24 hour period by specifying a date range and/or time range.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActiveZoneMinutesIntradayTimeSeriesApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let endDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let detailLevel = "detailLevel_example"; // String | The detail for which data will be returned. **Support:** 1min | 5min | 15min
let startTime = "startTime_example"; // String | The start of the period in the format HH:mm.
let endTime = "endTime_example"; // String | The end of the period in the format HH:mm.
apiInstance.getAZMByIntervalTimeSeriesIntraday(startDate, endDate, detailLevel, startTime, endTime, (error, data, response) => {
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
 **startDate** | **Date**| The date in the format yyyy-MM-dd or today | 
 **endDate** | **Date**| The date in the format yyyy-MM-dd or today | 
 **detailLevel** | **String**| The detail for which data will be returned. **Support:** 1min | 5min | 15min | 
 **startTime** | **String**| The start of the period in the format HH:mm. | 
 **endTime** | **String**| The end of the period in the format HH:mm. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

