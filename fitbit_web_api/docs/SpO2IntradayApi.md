# FitbitWebApiExplorer.SpO2IntradayApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSpO2IntradayByDate**](SpO2IntradayApi.md#getSpO2IntradayByDate) | **GET** /1/user/-/spo2/date/{date}/all.json | Get SpO2 Intraday by Date
[**getSpO2IntradayByInterval**](SpO2IntradayApi.md#getSpO2IntradayByInterval) | **GET** /1/user/-/spo2/date/{startDate}/{endDate}/all.json | Get SpO2 Intraday by Interval



## getSpO2IntradayByDate

> getSpO2IntradayByDate(date)

Get SpO2 Intraday by Date

This endpoint returns the SpO2 intraday data for a single date. SpO2 applies specifically to a user’s “main sleep”, which is the longest single period of time asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SpO2IntradayApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getSpO2IntradayByDate(date, (error, data, response) => {
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


## getSpO2IntradayByInterval

> getSpO2IntradayByInterval(startDate, endDate)

Get SpO2 Intraday by Interval

This endpoint returns the SpO2 intraday data for a specified date range. SpO2 applies specifically to a user’s “main sleep”, which is the longest single period of time asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.SpO2IntradayApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getSpO2IntradayByInterval(startDate, endDate, (error, data, response) => {
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

