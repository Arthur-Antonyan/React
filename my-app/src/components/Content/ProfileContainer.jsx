import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router';
import { addProfileInfo, getStatusHoc, setStatusHoc } from '../../redux/postPage-reducer';
import { getIsAuth, getMyId, getProfile, getStatus } from '../../redux/postsSelector';
import withAuthHoc from '../hocs/withAuthHoc';
import { Profile } from './Content';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : this.props.myId;

    this.props.addProfileInfo(userId);

    this.props.getStatusHoc(userId);
  }
  render() {
    // console.log('render profile');
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
  // console.log('mapStateToProps');
  return {
    // profile: state.PostPage.profile,
    // isAuth: state.auth.isAuth,
    // status: state.PostPage.status,
    // myId: state.auth.id,
    profile: getProfile(state),
    isAuth: getIsAuth(state),
    status: getStatus(state),
    myId: getMyId(state),
  };
};

export default connect(mapStateToProps, { addProfileInfo, getStatusHoc, setStatusHoc })(ProfileURLMatch); //the error is here
