import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';

export function User(props) {
  return props.users.map((item) => (
    <div className={styles.user}>
      <img src={item.img} alt="ava" />
      <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
    </div>
  ));
}
