import React from 'react';
import styles from './Post.module.css';
export function Post(props) {
  return (
    <div className={styles.post}>
      <img src="https://www.blexar.com/avatar.png" />
      <span>{props.text}</span>
      <div>
        <button>{props.like}</button>
      </div>
    </div>
  );
}
