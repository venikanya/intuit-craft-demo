const initialState = {
  id: "",
  name: "",
  isFetching: false,
  error: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        id: action.data.Id,
        name: action.data.Name,
        error: {}
      };
    case "FETCH_USER_FAILED":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
