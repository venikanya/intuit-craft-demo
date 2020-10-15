import fetch from 'cross-fetch';

function fetchingUserInfo() {
  return {
    type: "FETCH_USER"
  };
}

function fetchUserInfoSuccess(json) {
  return {
    type: "FETCH_USER_SUCCESS",
    data: json
  }
}

function fetchingUserInfoFailure(err) {
  return {
    type: "FETCH_USER_FAILED",
    error: err
  };
}

export function fetchUserInfo(userId) {
  return dispatch => {
    dispatch(fetchingUserInfo());
    return fetch(`http://localhost:9001/${userId}`, {
      method: "GET"
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response);
      }
      return response.json();
    })
    .then(json => dispatch(fetchUserInfoSuccess(json)))
    .catch(err => dispatch(fetchingUserInfoFailure(err)))
  }
}
