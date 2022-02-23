import { NavLink } from 'react-router-dom';
import StoreContext from '../../../storeContext';
import styles from './Users.module.css';

// export function User(props) {
//   let users = props.store.getState().MessagePage.user;
//   return users.map((item) => (
//     <div className={styles.user}>
//       <img src={item.img} alt="ava" />
//       <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
//     </div>
//   ));
// }

export function User() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let users = store.getState().MessagePage.user;
        return users.map((item) => (
          <div className={styles.user}>
            <img src={item.img} alt="ava" />
            <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
          </div>
        ));
      }}
    </StoreContext.Consumer>
  );
}
