import React from 'react';
import { connect } from 'react-redux';
import { followAC, setFriendsAC, unFollowAC } from '../../redux/friendsPage-reducer';
import Friends from './Friends';
import styles from './Friends.module.css';

const mapStateToProps = (state) => {
  return {
    friends: state.FriendsPage.friends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (friendsId) => dispatch(followAC(friendsId)),
    unfollow: (friendsId) => dispatch(unFollowAC(friendsId)),
    setFriends: (friends) => dispatch(setFriendsAC(friends)),
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
