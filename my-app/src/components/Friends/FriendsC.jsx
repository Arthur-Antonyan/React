// import React from 'react';
// import styles from './Friends.module.css';
// import * as axios from 'axios';
// import FriendsComponent from './Friends';

// class Friends extends React.Component {
//   componentDidMount() {
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageLength}`)
//       .then((response) => this.props.setFriends(response.data.items));
//   }
//   changePages = (item) => {
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageLength}`)
//       .then((response) => this.props.setFriends(response.data.items));
//     this.props.changeSelected(item);
//   };

//   render() {
//     return (
//       <FriendsComponent
//         setTotalUsers={this.props.setTotalUsers}
//         totalUsers={this.props.totalUsers}
//         pageLength={this.props.pageLength}
//         currentPage={this.props.currentPage}
//         friends={this.props.friends}
//         unfollow={this.props.unfollow}
//         follow={this.props.follow}
//         changePages={this.changePages}
//       />
//     );

//   }
// }
// export default Friends;
