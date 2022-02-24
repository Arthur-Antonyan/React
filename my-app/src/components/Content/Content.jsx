import React from 'react';
import styles from './Content.module.css';
import { MyPosts } from './MyPosts/MyPosts';
// import { AddPost } from './AddPost/AddPost';
import { AddPostContainer } from './AddPost/AddPostContainer';

export function Profile(props) {
  return (
    <div>
      <AddPostContainer
      // dispatch={props.dispatch}
      // areaValue={props.areaValue}
      // store={props.store}
      />
      {/* <AddPost
        dispatch={props.dispatch}
        areaValue={props.areaValue}
      /> */}
      {/* <MyPosts posts={props.posts.post} /> */}
      {/* <MyPosts store={props.store} /> */}
    </div>
  );
}
