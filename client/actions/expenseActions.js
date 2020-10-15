import fetch from 'cross-fetch';

function updatingExpenseInfo() {
  return {
    type: "UPDATE_EXPENSE"
  };
}

function updateExpenseSuccess(json) {
  return {
    type: "UPDATE_EXPENSE_SUCCESS",
    data: json
  }
}

function updateExpenseFailure(err) {
  return {
    type: "UPDATE_EXPENSE_FAILED",
    error: err
  };
}

export function updateExpense(tripId, expense) {
  return (dispatch, getState) => {
    const { user } = getState();
    dispatch(updatingExpenseInfo());
    return fetch(`http://localhost:9001/travelList/${user.id}/${tripId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response);
      }
      return response.json();
    })
    .then(json => dispatch(updateExpenseSuccess(json)))
    .catch(err => dispatch(updateExpenseFailure(err)))
  }
}
