# FitbitWebApiExplorer.UserApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBadges**](UserApi.md#getBadges) | **GET** /1/user/-/badges.json | Get Badges
[**getProfile**](UserApi.md#getProfile) | **GET** /1/user/-/profile.json | Get Profile
[**updateProfile**](UserApi.md#updateProfile) | **POST** /1/user/-/profile.json | Update Profile



## getBadges

> getBadges()

Get Badges

Retrieves the user&#39;s badges in the format requested. Response includes all badges for the user as seen on the Fitbit website badge locker (both activity and weight related.) The endpoint returns weight and distance badges based on the user&#39;s unit profile preference as on the website.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.UserApi();
apiInstance.getBadges((error, data, response) => {
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


## getProfile

> getProfile()

Get Profile

Returns a user&#39;s profile. The authenticated owner receives all values. However, the authenticated user&#39;s access to other users&#39; data is subject to those users&#39; privacy settings. Numerical values are returned in the unit system specified in the Accept-Language header.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.UserApi();
apiInstance.getProfile((error, data, response) => {
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


## updateProfile

> updateProfile(opts)

Update Profile

Updates a user&#39;s profile using a form.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.UserApi();
let opts = {
  'gender': "gender_example", // String | The sex of the user; (MALE/FEMALE/NA).
  'birthday': new Date("2013-10-20"), // Date | The date of birth in the format of yyyy-MM-dd.
  'height': "height_example", // String | The height in the format X.XX in the unit system that corresponds to the Accept-Language header provided.
  'aboutMe': "aboutMe_example", // String | This is a short description of user.
  'fullname': "fullname_example", // String | The fullname of the user.
  'country': "country_example", // String | The country of the user's residence. This is a two-character code.
  'state': "state_example", // String | The US state of the user's residence. This is a two-character code if the country was or is set to US.
  'city': "city_example", // String | The US city of the user's residence.
  'strideLengthWalking': "strideLengthWalking_example", // String | Walking stride length in the format X.XX, where it is in the unit system that corresponds to the Accept-Language header provided.
  'strideLengthRunning': "strideLengthRunning_example", // String | Running stride length in the format X.XX, where it is in the unit system that corresponds to the Accept-Language header provided.
  'weightUnit': "weightUnit_example", // String | Default weight unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
  'heightUnit': "heightUnit_example", // String | Default height/distance unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
  'waterUnit': "waterUnit_example", // String | Default water unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
  'glucoseUnit': "glucoseUnit_example", // String | Default glucose unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
  'timezone': "timezone_example", // String | The timezone in the format 'America/Los_Angeles'.
  'foodsLocale': "foodsLocale_example", // String | The food database locale in the format of xx.XX.
  'locale': "locale_example", // String | The locale of the website (country/language); one of the locales, currently – (en_US, fr_FR, de_DE, es_ES, en_GB, en_AU, en_NZ, ja_JP).
  'localeLang': "localeLang_example", // String | The Language in the format 'xx'. You should specify either locale or both - localeLang and localeCountry (locale is higher priority).
  'localeCountry': "localeCountry_example", // String | The Country in the format 'xx'. You should specify either locale or both - localeLang and localeCountry (locale is higher priority).
  'startDayOfWeek': "startDayOfWeek_example" // String | The Start day of the week, meaning what day the week should start on. Either Sunday or Monday.
};
apiInstance.updateProfile(opts, (error, data, response) => {
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
 **gender** | **String**| The sex of the user; (MALE/FEMALE/NA). | [optional] 
 **birthday** | **Date**| The date of birth in the format of yyyy-MM-dd. | [optional] 
 **height** | **String**| The height in the format X.XX in the unit system that corresponds to the Accept-Language header provided. | [optional] 
 **aboutMe** | **String**| This is a short description of user. | [optional] 
 **fullname** | **String**| The fullname of the user. | [optional] 
 **country** | **String**| The country of the user&#39;s residence. This is a two-character code. | [optional] 
 **state** | **String**| The US state of the user&#39;s residence. This is a two-character code if the country was or is set to US. | [optional] 
 **city** | **String**| The US city of the user&#39;s residence. | [optional] 
 **strideLengthWalking** | **String**| Walking stride length in the format X.XX, where it is in the unit system that corresponds to the Accept-Language header provided. | [optional] 
 **strideLengthRunning** | **String**| Running stride length in the format X.XX, where it is in the unit system that corresponds to the Accept-Language header provided. | [optional] 
 **weightUnit** | **String**| Default weight unit on website (which doesn&#39;t affect API); one of (en_US, en_GB, &#39;any&#39; for METRIC). | [optional] 
 **heightUnit** | **String**| Default height/distance unit on website (which doesn&#39;t affect API); one of (en_US, en_GB, &#39;any&#39; for METRIC). | [optional] 
 **waterUnit** | **String**| Default water unit on website (which doesn&#39;t affect API); one of (en_US, en_GB, &#39;any&#39; for METRIC). | [optional] 
 **glucoseUnit** | **String**| Default glucose unit on website (which doesn&#39;t affect API); one of (en_US, en_GB, &#39;any&#39; for METRIC). | [optional] 
 **timezone** | **String**| The timezone in the format &#39;America/Los_Angeles&#39;. | [optional] 
 **foodsLocale** | **String**| The food database locale in the format of xx.XX. | [optional] 
 **locale** | **String**| The locale of the website (country/language); one of the locales, currently – (en_US, fr_FR, de_DE, es_ES, en_GB, en_AU, en_NZ, ja_JP). | [optional] 
 **localeLang** | **String**| The Language in the format &#39;xx&#39;. You should specify either locale or both - localeLang and localeCountry (locale is higher priority). | [optional] 
 **localeCountry** | **String**| The Country in the format &#39;xx&#39;. You should specify either locale or both - localeLang and localeCountry (locale is higher priority). | [optional] 
 **startDayOfWeek** | **String**| The Start day of the week, meaning what day the week should start on. Either Sunday or Monday. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

