import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
let withAuthHoc = (Component) => {
  class PropsForHoc extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(PropsForHoc);
  return ConnectedAuthRedirectComponent;
};

export default withAuthHoc;
