import React from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

export function MyPosts(props) {
  let posts = props.store.getState().PostPage.post;
  let post = posts.map((item) => <Post text={item.text} like={item.like} />);
  return <div className={styles.post}>{post}</div>;
}
