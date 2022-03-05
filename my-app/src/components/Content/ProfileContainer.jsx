import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router';
import { userAPI } from '../../api/api';
import { addProfileInfo, getStatusHoc, setStatusHoc } from '../../redux/postPage-reducer';
import withAuthHoc from '../hocs/withAuthHoc';
import { Profile } from './Content';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : this.props.myId;
    // let userId = `22629`;
    // let userId = this.props.match.params.userId;
    // if (!userId) {
    //   userId = 22629;
    // }
    this.props.addProfileInfo(userId);

    this.props.getStatusHoc(userId);
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatusHoc} />
    );
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
    status: state.PostPage.status,
    myId: state.auth.id,
  };
};

export default connect(mapStateToProps, { addProfileInfo, getStatusHoc, setStatusHoc })(ProfileURLMatch); //the error is here
