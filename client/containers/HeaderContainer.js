import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Container extends React.Component {
  render () {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Container);
