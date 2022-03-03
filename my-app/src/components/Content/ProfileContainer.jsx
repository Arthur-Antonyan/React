import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router';
import { userAPI } from '../../api/api';
import { addProfileInfo } from '../../redux/postPage-reducer';
import withAuthHoc from '../hocs/withAuthHoc';
import { Profile } from './Content';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : `22658`;
    this.props.addProfileInfo(userId);
  }
  render() {
    // if (!this.props.isAuth) return <Navigate to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const WithAuthRedirect = withAuthHoc(ProfileContainer);
const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <WithAuthRedirect {...props} match={match} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.PostPage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { addProfileInfo })(ProfileURLMatch); //the error is here
