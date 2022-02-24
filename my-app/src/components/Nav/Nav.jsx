import React from 'react';

import { NavLink } from 'react-router-dom';
import Friends from './Friend/Friends';
import styles from './Nav.module.css';

export function Nav(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.active : '')}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" className={(navData) => (navData.isActive ? styles.active : '')}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={(navData) => (navData.isActive ? styles.active : '')}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={(navData) => (navData.isActive ? styles.active : '')}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={(navData) => (navData.isActive ? styles.active : '')}>
          Settings
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/friends" className={(navData) => (navData.isActive ? styles.active : '')}>
          Friends
          <div className={styles.item1}>
            {/* <Friends friends={props.friends.user} /> */}
            {/* <Friends store={props.store} /> */}
          </div>
        </NavLink>
      </div>
    </nav>
  );
}
