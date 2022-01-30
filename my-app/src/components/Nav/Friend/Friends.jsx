import React from 'react';
import styles from './Friends.module.css';
function Friends(props) {
  let userImg = props.friends.filter((item, index) => index > 2).map((item) => <img src={item.img} />);
  let userName = props.friends.filter((item, index) => index > 2).map((item) => <p>{item.name}</p>);

  return (
    <div className={styles.friendAvatar}>
      {userImg}
      {userName}
    </div>
  );
}
export default Friends;
