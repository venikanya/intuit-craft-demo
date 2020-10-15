import React from 'react';
import PropTypes from 'prop-types';

import { updateExpense } from '../actions/expenseActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  tripsInfo: PropTypes.object,
};

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.typeRef = React.createRef();
    this.expenseTypeRef = React.createRef();
    this.expenseAmountRef = React.createRef();
    this.state = {
      filter: 'Business',
      add: ''
    };
  }

  onTypeFilterChange() {
    const type = this.typeRef.current.value;
    this.setState({ ...this.state, filter: type });
  }

  onAddExpense(trip) {
    this.setState({...this.state, add: trip.Id});
  }

  renderExpense(expense, index) {
    return (
      <div key={index} className="expense-entry">{expense.Category}: {expense.Amount} USD</div>
    );
  }

  onCancelExpense(e) {
    e.preventDefault();
    this.setState({...this.state, add: ''});
  }

  onSaveExpense(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(updateExpense(this.state.add, {
      type: this.expenseTypeRef.current.value,
      amount: parseFloat(this.expenseAmountRef.current.value)
    }));
    this.setState({...this.state, add: ''});
  }

  renderExpenseInput() {
    return (
      <div className="expense-entry">
        <form onSubmit={this.onSaveExpense.bind(this)}>
          <input type="text"
            placeholder="Expense Type"
            autoFocus
            pattern="^[a-zA-Z0-9]{1,15}"
            title="Entry should start with a letter or digit. Only 15 characters allowed"
            ref={this.expenseTypeRef}>
          </input>
          <input type="text" className="expense-amount"
            placeholder="Amount in USD"
            pattern="^\d+(\.\d{1,2})?$"
            title="Enter a valid amount for expense"
            autoFocus
            ref={this.expenseAmountRef}>
          </input>
          <input type="submit" value="save"></input>
          <button onClick={this.onCancelExpense.bind(this)}>cancel</button>
        </form>
      </div>
    );
  }
  renderTypeFilter() {
    return (
      <select name="type" ref={this.typeRef} onChange={this.onTypeFilterChange.bind(this)}>
        <option value="Business">Business</option>
        <option value="Non-Business">Non Business</option>
      </select>
    );
  }

  render() {
    const { tripsInfo = {}} = this.props
    const { list = [], isFetching, error = {} } = tripsInfo;
    const { add = {}, filter } = this.state;
    const filteredTrips = list.filter(trip => trip.Category === filter);
    return (
      <div className="widget">
        {isFetching && <div className="loader-container">
          <div className="loader"></div>
        </div>}
        {error && <div className="error">{error.statusText}</div>}
        <div className="widget-actions">
          {this.renderTypeFilter()}
        </div>
        {filteredTrips.map((trip, index) => {
          return (
            <div key={index} className="trip-info">
              <div className="trip-id">
                Trip: {trip.Destination}
                <button className="edit-expense" onClick={this.onAddExpense.bind(this, trip)}>Add</button>
              </div>
              <div className="trip-expenses">
              {trip.ExpenseList.map((expense, index) => this.renderExpense(expense, index))}
              {add === trip.Id && this.renderExpenseInput()}
              </div>
            </div>
          );
        })}
      </div>

    );
  }
}
ExpenseList.propTypes = propTypes;

export default ExpenseList;
