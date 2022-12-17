# FitbitWebApiExplorer.FriendsApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFriends**](FriendsApi.md#getFriends) | **GET** /1.1/user/-/friends.json | Get Friends
[**getFriendsLeaderboard**](FriendsApi.md#getFriendsLeaderboard) | **GET** /1.1/user/-/leaderboard/friends.json | Get Friends Leaderboard



## getFriends

> getFriends()

Get Friends

Returns data of a user&#39;s friends in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FriendsApi();
apiInstance.getFriends((error, data, response) => {
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


## getFriendsLeaderboard

> getFriendsLeaderboard()

Get Friends Leaderboard

Returns data of a user&#39;s friends in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FriendsApi();
apiInstance.getFriendsLeaderboard((error, data, response) => {
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

