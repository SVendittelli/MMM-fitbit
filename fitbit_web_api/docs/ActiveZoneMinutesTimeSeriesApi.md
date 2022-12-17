# FitbitWebApiExplorer.ActiveZoneMinutesTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAZMTimeSeriesByDate**](ActiveZoneMinutesTimeSeriesApi.md#getAZMTimeSeriesByDate) | **GET** /1/user/-/activities/active-zone-minutes/date/{date}/{period}.json | Get AZM Time Series by Date
[**getAZMTimeSeriesByInterval**](ActiveZoneMinutesTimeSeriesApi.md#getAZMTimeSeriesByInterval) | **GET** /1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}.json | Get AZM Time Series by Interval



## getAZMTimeSeriesByDate

> getAZMTimeSeriesByDate(date, period)

Get AZM Time Series by Date

Returns the daily summary values over a period of time by specifying a date and time period.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActiveZoneMinutesTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let period = "period_example"; // String | The range for which data will be returned. **Supported:** 1d | 7d | 30d | 1w | 1m | 3m | 6m | 1y
apiInstance.getAZMTimeSeriesByDate(date, period, (error, data, response) => {
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
 **period** | **String**| The range for which data will be returned. **Supported:** 1d | 7d | 30d | 1w | 1m | 3m | 6m | 1y | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAZMTimeSeriesByInterval

> getAZMTimeSeriesByInterval(startDate, endDate)

Get AZM Time Series by Interval

Returns the daily summary values over an interval by specifying a date range.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActiveZoneMinutesTimeSeriesApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
let endDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today
apiInstance.getAZMTimeSeriesByInterval(startDate, endDate, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

