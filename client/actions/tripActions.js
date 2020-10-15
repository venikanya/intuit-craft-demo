import fetch from 'cross-fetch';

function fetchingTravelList() {
  return {
    type: "FETCH_TRAVEL"
  };
}

function fetchTravelListSuccess(json) {
  return {
    type: "FETCH_TRAVEL_SUCCESS",
    data: json
  }
}

function fetchingTravelListFailure(err) {
  return {
    type: "FETCH_TRAVEL_FAILED",
    error: err
  };
}

export function fetchTravelList(userId, query = "") {
  return dispatch => {
    dispatch(fetchingTravelList());
    return fetch(`http://localhost:9001/travelList/${userId}${query}`, {
      method: "GET"
    })
    .then(response => {
      if(!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then(json => dispatch(fetchTravelListSuccess(json)))
    .catch(err => dispatch(fetchingTravelListFailure(err)))
  }
}
