import React from 'react';
import { connect } from 'react-redux';
import Content from '../components/Content';
import { getMilesPerYear, getTripsByProject } from '../selectors';

class Container extends React.Component {
  render () {
    return (
      <Content {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  tripsInfo: state.trips,
  milesSummary: getMilesPerYear(state),
  tripsByProject: getTripsByProject(state)
});

export default connect(mapStateToProps)(Container);
