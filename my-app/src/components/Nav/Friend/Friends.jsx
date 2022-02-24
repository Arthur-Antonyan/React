// import React from 'react';
// // import StoreContext from '../../../storeContext';
// import styles from './Friends.module.css';

// function Friends() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let friends = store.getState().MessagePage.user;
//         let userImg = friends.filter((item, index) => index > 2).map((item) => <img src={item.img} />);
//         let userName = friends.filter((item, index) => index > 2).map((item) => <p>{item.name}</p>);
//         return (
//           <div className={styles.friendAvatar}>
//             {userImg}
//             {userName}
//           </div>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }
// export default Friends;
