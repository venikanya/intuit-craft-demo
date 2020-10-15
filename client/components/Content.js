import React from 'react';
import PropTypes from 'prop-types';

import { fetchTravelList } from '../actions/tripActions';
import { fetchUserInfo } from '../actions/userActions';

import TravelInfo from './TravelInfo';
import ExpenseList from './ExpenseList';
import MilesSummary from './MilesSummary';
import TripSummary from './TripSummary';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
  tripsInfo: PropTypes.object,
  milesSummary: PropTypes.number,
  tripsByProject: PropTypes.object
};

class Content extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUserInfo(1));
    dispatch(fetchTravelList(1));
  }

  render() {
    const { dispatch, milesSummary, tripsInfo, tripsByProject } = this.props;
    return (
      <div className="widget-container">
        <TravelInfo tripsInfo={tripsInfo} />
        <ExpenseList dispatch={dispatch} tripsInfo={tripsInfo} />
        <MilesSummary milesSummary={milesSummary} tripsInfo={tripsInfo}/>
        <TripSummary tripsInfo={tripsInfo} tripsByProject={tripsByProject}/>
      </div>
    );
  }
}

Content.propTypes = propTypes;

export default Content;
