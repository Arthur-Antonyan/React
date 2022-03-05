import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Navigate } from 'react-router';
export function Header(props) {
  //
  const logout = () => {
    props.logOut();
    if (!props.isAuth) return <Navigate to="/login" />;
  };

  return (
    <header className={styles.header}>
      <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" />
      <div className={styles.login}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}
