import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { addProfileInfo } from '../../redux/postPage-reducer';
import { Profile } from './Content';
// import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/22657`).then((response) => {
      this.props.addProfileInfo(response.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.PostPage.profile,
  };
};
// let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addProfileInfo })(ProfileContainer); //the error is here
