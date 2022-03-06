import React from 'react';
import { connect } from 'react-redux';
import { follow, getFriends, setTotalUsers, unfollow } from '../../redux/friendsPage-reducer';
import styles from './Friends.module.css';
import FriendsComponent from './Friends';
import { Navigate } from 'react-router';
import withAuthHoc from '../hocs/withAuthHoc';
import { compose } from 'redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getfriends,
  getFriendsSuper,
  getIsAuth,
  getIsLoading,
  getPageLength,
  getTotalUsers,
} from '../../redux/friendsSelector';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getFriends(this.props.currentPage, this.props.pageLength, null);
  }
  changePages = (item) => {
    this.props.getFriends(null, this.props.pageLength, item);
  };

  render() {
    // if (!this.props.isAuth) return <Navigate to="/login" />;
    // console.log('render');
    return (
      <FriendsComponent
        setTotalUsers={this.props.setTotalUsers}
        totalUsers={this.props.totalUsers}
        pageLength={this.props.pageLength}
        currentPage={this.props.currentPage}
        friends={this.props.friends}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        changePages={this.changePages}
        isLoading={this.props.isLoading}
        isFollowing={this.props.isFollowing}
      />
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     friends: state.FriendsPage.friends,
//     pageLength: state.FriendsPage.pageLength,
//     totalUsers: state.FriendsPage.totalUsers,
//     currentPage: state.FriendsPage.currentPage,
//     isLoading: state.FriendsPage.isLoading,
//     isFollowing: state.FriendsPage.followingInProgress,
//     isAuth: state.auth.isAuth,
//   };
// };

const mapStateToProps = (state) => {
  // console.log('mapStateToProps');
  return {
    // friends: getfriends(state),
    friends: getFriendsSuper(state),
    pageLength: getPageLength(state),
    totalUsers: getTotalUsers(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    isFollowing: getFollowingInProgress(state),
    isAuth: getIsAuth(state),
  };
};
// let withAuthRedirect = withAuthHoc(FriendsContainer);

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setTotalUsers,
//   getFriends,
// })(withAuthRedirect);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setTotalUsers,
    getFriends,
  })
  // withAuthHoc
)(FriendsContainer);
