import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router';
import { addProfileInfo } from '../../redux/postPage-reducer';
import { Profile } from './Content';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : `22658`;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
      this.props.addProfileInfo(response.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.PostPage.profile,
  };
};

export default connect(mapStateToProps, { addProfileInfo })(ProfileURLMatch); //the error is here
