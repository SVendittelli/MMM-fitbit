# FitbitWebApiExplorer.FoodAndWaterTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFoodsByDateRange**](FoodAndWaterTimeSeriesApi.md#getFoodsByDateRange) | **GET** /1/user/-/foods/log/{resource-path}/date/{base-date}/{end-date}.json | Get Food or Water Time Series
[**getFoodsResourceByDatePeriod**](FoodAndWaterTimeSeriesApi.md#getFoodsResourceByDatePeriod) | **GET** /1/user/-/foods/log/{resource-path}/date/{date}/{period}.json | Get Food or Water Time Series



## getFoodsByDateRange

> getFoodsByDateRange(resourcePath, baseDate, endDate)

Get Food or Water Time Series

Updates a user&#39;s daily activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterTimeSeriesApi();
let resourcePath = "'caloriesIn'"; // String | The resouce path. See options in the Resouce Path Options section in the full documentation.
let baseDate = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getFoodsByDateRange(resourcePath, baseDate, endDate, (error, data, response) => {
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
 **resourcePath** | **String**| The resouce path. See options in the Resouce Path Options section in the full documentation. | [default to &#39;caloriesIn&#39;]
 **baseDate** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsResourceByDatePeriod

> getFoodsResourceByDatePeriod(resourcePath, date, period)

Get Food or Water Time Series

Updates a user&#39;s daily activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterTimeSeriesApi();
let resourcePath = "'caloriesIn'"; // String | The resouce path. See options in the Resouce Path Options section in the full documentation.
let date = new Date("2013-10-20"); // Date | The end date of the period specified in the format yyyy-MM-dd or today.
let period = "period_example"; // String | The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 3m, 6m, 1y, or max.
apiInstance.getFoodsResourceByDatePeriod(resourcePath, date, period, (error, data, response) => {
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
 **resourcePath** | **String**| The resouce path. See options in the Resouce Path Options section in the full documentation. | [default to &#39;caloriesIn&#39;]
 **date** | **Date**| The end date of the period specified in the format yyyy-MM-dd or today. | 
 **period** | **String**| The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 3m, 6m, 1y, or max. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

