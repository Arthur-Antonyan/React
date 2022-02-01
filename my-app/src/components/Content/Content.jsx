import React from 'react';
import styles from './Content.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { AddPost } from './AddPost/AddPost';

export function Profile(props) {
  return (
    <div>
      <AddPost addPost={props.addPost} onChange={props.onChange} areaValue={props.areaValue} />
      <MyPosts posts={props.posts.post} />
    </div>
  );
}
