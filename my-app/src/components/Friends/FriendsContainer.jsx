import React from 'react';
import { connect } from 'react-redux';
import { changeSelected, follow, isLoadingToggle, setFriends, setTotalUsers, unfollow } from '../../redux/friendsPage-reducer';
import styles from './Friends.module.css';
import * as axios from 'axios';
import FriendsComponent from './Friends';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.isLoadingToggle(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageLength}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.isLoadingToggle(false);
        this.props.setFriends(response.data.items);
      });
  }
  changePages = (item) => {
    this.props.isLoadingToggle(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageLength}`, {
        withCredentials: true,
      })
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setFriends,
  setTotalUsers,
  changeSelected,
  isLoadingToggle,
})(FriendsContainer);
// export default FriendsContainer;
