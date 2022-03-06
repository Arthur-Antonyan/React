import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StoreContext from '../../../storeContext';
import styles from './Users.module.css';

function UserContainer(props) {
  let users = props.users;
  return users.map((item) => (
    <div key={item.path} className={styles.user}>
      <img src={item.img} alt="ava" />
      <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
    </div>
  ));
}

const mapStateToProps = (state) => {
  return {
    users: state.MessagePage.user,
  };
};
export default connect(mapStateToProps)(UserContainer);
// export function User() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let users = store.getState().MessagePage.user;
//         return users.map((item) => (
//           <div className={styles.user}>
//             <img src={item.img} alt="ava" />
//             <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
//           </div>
//         ));
//       }}
//     </StoreContext.Consumer>
//   );
// }
