import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  milesSummary: PropTypes.number,
  tripsInfo: PropTypes.object
};

class MilesSummary extends React.Component {

  render() {
    const { milesSummary = 0, tripsInfo = {} } = this.props;
    const { error = {}, isFetching } = tripsInfo;
    return (
      <div className="widget">
        {isFetching && <div className="loader-container">
          <div className="loader"></div>
        </div>}
        {error && <div className="error">{error.statusText}</div>}
        <div className="widget-summary-wrapper">
          Miles accrued in this year
          <div className="widget-label">
            {new Date(Date.now()).getFullYear()}
          </div>
          <div className="widget-value">
            {milesSummary}
          </div>
        </div>
      </div>

    );
  }
}
MilesSummary.propTypes = propTypes;

export default MilesSummary;
