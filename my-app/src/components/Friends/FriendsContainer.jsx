import React from 'react';
import { connect } from 'react-redux';
// import {
//   changeSelectedAC,
//   followAC,
//   isLoadingAC,
//   setFriendsAC,
//   setTotalUsersAC,
//   unFollowAC,
// } from '../../redux/friendsPage-reducer';
import { changeSelected, follow, isLoadingToggle, setFriends, setTotalUsers, unfollow } from '../../redux/friendsPage-reducer';
import styles from './Friends.module.css';
import * as axios from 'axios';
import FriendsComponent from './Friends';

class Friends extends React.Component {
  componentDidMount() {
    this.props.isLoadingToggle(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageLength}`)
      .then((response) => {
        this.props.isLoadingToggle(false);
        this.props.setFriends(response.data.items);
      });
  }
  changePages = (item) => {
    this.props.isLoadingToggle(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageLength}`)
      .then((response) => {
        this.props.isLoadingToggle(false);
        this.props.setFriends(response.data.items);
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
        // load={this.props.load}
        isLoading={this.props.isLoading}
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
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (friendsId) => dispatch(followAC(friendsId)),
//     unfollow: (friendsId) => dispatch(unFollowAC(friendsId)),
//     setFriends: (friends) => dispatch(setFriendsAC(friends)),
//     setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
//     changeSelected: (selectedSpan) => dispatch(changeSelectedAC(selectedSpan)),
//     load: (isLoading) => dispatch(isLoadingAC(isLoading)),
//   };
// };

const FriendsContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setFriends,
  setTotalUsers,
  changeSelected,
  isLoadingToggle,
})(Friends);
export default FriendsContainer;
