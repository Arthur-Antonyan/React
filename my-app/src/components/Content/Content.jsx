import React from 'react';
import styles from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
// import { AddPost } from './AddPost/AddPost';
import { AddPostContainer } from './AddPost/AddPostContainer';
import MyPostsContainer from './ProfileContainer';

export function Profile(props) {
  return (
    <div>
      <MyPosts profile={props.profile} status={props.status} setStatus={props.setStatusHoc} />
      {/* <MyPostsContainer /> */}
      <AddPostContainer />
    </div>
  );
}
