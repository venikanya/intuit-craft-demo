import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.object
};

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        Travel Expense Report for {user.name}
      </div>
    );
  }
}
Header.propTypes = propTypes;

export default Header;
