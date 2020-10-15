import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tripsInfo: PropTypes.object
};

class TravelInfo extends React.Component {

  render() {
    const { tripsInfo = {}} = this.props;
    const { list = [], isFetching, error = {}} = tripsInfo;
    return (
      <div className="widget">
        {isFetching && <div className="loader-container">
          <div className="loader"></div>
        </div>}
        {error && <div className="error">{error.statusText}</div>}
        {list.length > 0 &&
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Miles</th>
                <th>Category</th>
              </tr>
              {list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{new Date(item.Date).toLocaleString()}</td>
                    <td>{item.Miles}</td>
                    <td>{item.Category}</td>
                    <td>{item.Description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>

    );
  }
}
TravelInfo.propTypes = propTypes;

export default TravelInfo;
