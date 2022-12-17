# FitbitWebApiExplorer.TemperatureApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTempCoreSummaryByDate**](TemperatureApi.md#getTempCoreSummaryByDate) | **GET** /1/user/-/temp/core/date/{date}.json | Get Temperature (Core) Summary by Date
[**getTempCoreSummaryByInterval**](TemperatureApi.md#getTempCoreSummaryByInterval) | **GET** /1/user/-/temp/core/date/{startDate}/{endDate}.json | Get Temperature (Core) Summary by Interval
[**getTempSkinSummaryByInterval**](TemperatureApi.md#getTempSkinSummaryByInterval) | **GET** /1/user/-/temp/skin/date/{startDate}/{endDate}.json | Get Temperature (Skin) Summary by Interval
[**getTempSkinSummaryDate**](TemperatureApi.md#getTempSkinSummaryDate) | **GET** /1/user/-/temp/skin/date/{date}.json | Get Temperature (Skin) Summary by Date



## getTempCoreSummaryByDate

> getTempCoreSummaryByDate(date)

Get Temperature (Core) Summary by Date

Returns the Temperature (Core) data for a single date. Temperature (Core) data applies specifically to data logged manually by the user throughout the day.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.TemperatureApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getTempCoreSummaryByDate(date, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTempCoreSummaryByInterval

> getTempCoreSummaryByInterval(startDate, endDate)

Get Temperature (Core) Summary by Interval

Returns Temperature (Core) data for a date range. Temperature (Core) data applies specifically to data logged manually by the user throughout the day and the maximum date range cannot exceed 30 days.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.TemperatureApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getTempCoreSummaryByInterval(startDate, endDate, (error, data, response) => {
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
 **startDate** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **endDate** | **Date**| The date in the format of yyyy-MM-dd or today. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTempSkinSummaryByInterval

> getTempSkinSummaryByInterval(startDate, endDate)

Get Temperature (Skin) Summary by Interval

Returns Temperature (Skin) data for a date range. It only returns a value for dates on which the Fitbit device was able to record Temperature (skin) data and the maximum date range cannot exceed 30 days.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.TemperatureApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getTempSkinSummaryByInterval(startDate, endDate, (error, data, response) => {
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
 **startDate** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **endDate** | **Date**| The date in the format of yyyy-MM-dd or today. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTempSkinSummaryDate

> getTempSkinSummaryDate(date)

Get Temperature (Skin) Summary by Date

Returns the Temperature (Skin) data for a single date. Temperature (Skin) data applies specifically to a user’s “main sleep”, which is the longest single period of time asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.TemperatureApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getTempSkinSummaryDate(date, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

