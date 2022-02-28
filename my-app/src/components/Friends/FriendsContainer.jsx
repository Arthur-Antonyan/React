import React from 'react';
import { connect } from 'react-redux';
import {
  changeSelected,
  follow,
  followingInProgressToggle,
  isLoadingToggle,
  setFriends,
  setTotalUsers,
  unfollow,
} from '../../redux/friendsPage-reducer';
import styles from './Friends.module.css';
import FriendsComponent from './Friends';
import { userAPI } from '../../api/api';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.isLoadingToggle(true);

    userAPI.getUsers(this.props.currentPage, this.props.pageLength).then((data) => {
      this.props.isLoadingToggle(false);

      this.props.setFriends(data.items);
    });
  }
  changePages = (item) => {
    this.props.isLoadingToggle(true);

    userAPI.getUsers(item, this.props.pageLength).then((data) => {
      this.props.isLoadingToggle(false);

      this.props.setFriends(data.items);
    });

    this.props.changeSelected(item);
  };

  render() {
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
        followingInProgressToggle={this.props.followingInProgressToggle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.FriendsPage.friends,
    pageLength: state.FriendsPage.pageLength,
    totalUsers: state.FriendsPage.totalUsers,
    currentPage: state.FriendsPage.currentPage,
    isLoading: state.FriendsPage.isLoading,
    isFollowing: state.FriendsPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setFriends,
  setTotalUsers,
  changeSelected,
  isLoadingToggle,
  followingInProgressToggle,
})(FriendsContainer);
// export default FriendsContainer;
