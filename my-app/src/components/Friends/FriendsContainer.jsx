import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedAC, followAC, setFriendsAC, setTotalUsersAC, unFollowAC } from '../../redux/friendsPage-reducer';
import Friends from './FriendsC';
import styles from './Friends.module.css';

const mapStateToProps = (state) => {
  return {
    friends: state.FriendsPage.friends,
    pageLength: state.FriendsPage.pageLength,
    totalUsers: state.FriendsPage.totalUsers,
    currentPage: state.FriendsPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (friendsId) => dispatch(followAC(friendsId)),
    unfollow: (friendsId) => dispatch(unFollowAC(friendsId)),
    setFriends: (friends) => dispatch(setFriendsAC(friends)),
    setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
    changeSelected: (selectedSpan) => dispatch(changeSelectedAC(selectedSpan)),
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
