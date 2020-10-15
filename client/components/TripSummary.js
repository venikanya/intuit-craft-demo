import React from 'react';
import PropTypes from 'prop-types';

import { getExpenseAmount } from '../utils/TripUtils';

const propTypes = {
  tripsInfo: PropTypes.object,
  tripsByProject: PropTypes.object
};

class TripSummary extends React.Component {
  constructor(props) {
    super(props);
    this.tripRef = React.createRef();
    this.state = {
      tripId: 0
    };
  }

  onTripFilterChange() {
    const value = this.tripRef.current.value;
    this.setState({ ...this.state, tripId: value });
  }

  renderProjectFilter() {
    const { tripsByProject = {}} = this.props;
    return (
      <select name="type" ref={this.tripRef} onChange={this.onTripFilterChange.bind(this)}>
        {Object.keys(tripsByProject).map((projectId, index) => <option key={index} value={projectId}>{tripsByProject[projectId][0].Destination}</option>)}
      </select>
    );
  }

  renderTripDetails() {
    const { tripsByProject = {}} = this.props;
    const trips = tripsByProject[this.state.tripId] || Object.values(tripsByProject)[0];
    if (trips.length > 0) {
      return trips.map((trip, index) => {
        return(
          <div key={index} className="trip-details">
          <table>
            <tbody>
              <tr>
                <td className="table-key">Date: </td>
                <td className="table-value">{new Date(trip.Date).toLocaleString()}</td>
              </tr>
              <tr>
                <td className="table-key">Miles: </td>
                <td className="table-value">{trip.Miles}</td>
              </tr>
              <tr>
                <td className="table-key">Category: </td>
                <td className="table-value">{trip.Category}</td>
              </tr>
              <tr>
                <td className="table-key">Total Expenses: </td>
                <td className="table-value">{getExpenseAmount(trip)} USD</td>
              </tr>
            </tbody>
          </table>
          </div>
        );
      })
    }
  }

  render() {
    const { tripsInfo = {}} = this.props
    const { list = [], isFetching, error = {} } = tripsInfo;
    return (
      <div className="widget">
        {isFetching && <div className="loader-container">
          <div className="loader"></div>
        </div>}
        {error && <div className="error">{error.statusText}</div>}
        {list.length > 0 &&
          <div>
            <div className="widget-actions">
              {this.renderProjectFilter(list)}
            </div>
            {this.renderTripDetails(list)}
          </div>
        }
      </div>
    );
  }
}
TripSummary.propTypes = propTypes;

export default TripSummary;
