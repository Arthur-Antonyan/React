import React from 'react';
import styles from './Content.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { AddPost } from './AddPost/AddPost';

export function Profile(props) {
  // let post = [
  //   { text: 'Post1', like: 'Like3' },
  //   { text: 'Post2', like: 'Like4' },
  // ];

  return (
    <div>
      <AddPost />
      <MyPosts posts={props.post.posts.post} />
    </div>
  );
}
