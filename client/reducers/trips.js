const initialState = {
  error: {},
  isFetching: false,
  list: []
};

export default function trips(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_EXPENSE_FAILED":
    case "FETCH_TRAVEL_FAILED":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case "UPDATE_EXPENSE":
    case "FETCH_TRAVEL":
      return {
        ...state,
        isFetching: true
      };
    case "UPDATE_EXPENSE_SUCCESS":
    case "FETCH_TRAVEL_SUCCESS":
      return {
        ...state,
        list: action.data,
        isFetching: false,
        error: {}
      };
    default:
      return state;
  }
}
