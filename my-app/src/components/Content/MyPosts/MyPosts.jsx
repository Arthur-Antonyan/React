import React from 'react';
import StoreContext from '../../../storeContext';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

// export function MyPosts(props) {
//   let posts = props.store.getState().PostPage.post;
//   let post = posts.map((item) => <Post text={item.text} like={item.like} />);
//   return <div className={styles.post}>{post}</div>;
// }

export function MyPosts() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let posts = store.getState().PostPage.post;
        let post = posts.map((item) => <Post text={item.text} like={item.like} />);
        return <div className={styles.post}>{post}</div>;
      }}
    </StoreContext.Consumer>
  );
}
