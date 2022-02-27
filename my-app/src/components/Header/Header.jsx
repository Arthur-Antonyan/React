import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header(props) {
  return (
    <header className={styles.header}>
      <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" />
      <div className={styles.login}>{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</div>
    </header>
  );
}
