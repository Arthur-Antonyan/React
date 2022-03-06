import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/authReducer';
import { Header } from './Header';

class HeaderComponent extends React.Component {
  // componentDidMount() {
  //   this.props.authUser();
  // }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logOut })(HeaderComponent);
