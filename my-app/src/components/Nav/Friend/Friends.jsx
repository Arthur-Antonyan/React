import React from 'react';
import StoreContext from '../../../storeContext';
import styles from './Friends.module.css';
// function Friends(props) {
//   let friends = props.store.getState().MessagePage.user;
//   // let userImg = props.friends.filter((item, index) => index > 2).map((item) => <img src={item.img} />);
//   // let userName = props.friends.filter((item, index) => index > 2).map((item) => <p>{item.name}</p>);
//   let userImg = friends.filter((item, index) => index > 2).map((item) => <img src={item.img} />);
//   let userName = friends.filter((item, index) => index > 2).map((item) => <p>{item.name}</p>);

//   return (
//     <div className={styles.friendAvatar}>
//       {userImg}
//       {userName}
//     </div>
//   );
// }
// export default Friends;
function Friends() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friends = store.getState().MessagePage.user;
        let userImg = friends.filter((item, index) => index > 2).map((item) => <img src={item.img} />);
        let userName = friends.filter((item, index) => index > 2).map((item) => <p>{item.name}</p>);
        return (
          <div className={styles.friendAvatar}>
            {userImg}
            {userName}
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
}
export default Friends;
