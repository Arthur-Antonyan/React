import React from 'react';
import styles from './AddPost.module.css';

export function AddPost() {
  return (
    <div className={styles.content}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png" />
      <div className={styles.item}>
        <textarea name="" className={styles.textarea} cols="20" rows="3"></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </div>
  );
}
