import React from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

export function MyPosts(props) {
  let post = props.posts.map((item) => <Post text={item.text} like={item.like} />);
  return (
    <div className={styles.post}>
      {/* <Post text={posts[0].text} like={posts[0].like} />
      <Post text={posts[1].text} like={posts[1].like} /> */}
      {post}
    </div>
  );
}
