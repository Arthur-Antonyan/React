import React from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

export function MyPosts() {
  let posts = [
    { text: 'Post1', like: 'Like3' },
    { text: 'Post2', like: 'Like4' },
  ];
  // let postt = posts.map((item) => <Post text={item.text} like={item.like} />);
  return (
    <div className={styles.post}>
      <Post text={posts[0].text} like={posts[0].like} />
      <Post text={posts[1].text} like={posts[1].like} />
      {/* {postt} */}
    </div>
  );
}
