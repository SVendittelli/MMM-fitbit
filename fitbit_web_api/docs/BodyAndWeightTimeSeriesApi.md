# FitbitWebApiExplorer.BodyAndWeightTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBodyResourceByDatePeriod**](BodyAndWeightTimeSeriesApi.md#getBodyResourceByDatePeriod) | **GET** /1/user/-/body/{resource-path}/date/{date}/{period}.json | Get Body Time Series
[**getBodyResourceByDateRange**](BodyAndWeightTimeSeriesApi.md#getBodyResourceByDateRange) | **GET** /1/user/-/body/{resource-path}/date/{base-date}/{end-date}.json | Get Body Time Series



## getBodyResourceByDatePeriod

> getBodyResourceByDatePeriod(resourcePath, date, period)

Get Body Time Series

Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightTimeSeriesApi();
let resourcePath = "'weight'"; // String | The resource path, which incudes the bmi, fat, or weight options.
let date = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let period = "period_example"; // String | The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
apiInstance.getBodyResourceByDatePeriod(resourcePath, date, period, (error, data, response) => {
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
 **resourcePath** | **String**| The resource path, which incudes the bmi, fat, or weight options. | [default to &#39;weight&#39;]
 **date** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **period** | **String**| The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBodyResourceByDateRange

> getBodyResourceByDateRange(resourcePath, baseDate, endDate)

Get Body Time Series

Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BodyAndWeightTimeSeriesApi();
let resourcePath = "'weight'"; // String | The resource path, which incudes the bmi, fat, or weight options.
let baseDate = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getBodyResourceByDateRange(resourcePath, baseDate, endDate, (error, data, response) => {
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
 **resourcePath** | **String**| The resource path, which incudes the bmi, fat, or weight options. | [default to &#39;weight&#39;]
 **baseDate** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

