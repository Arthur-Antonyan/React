import React from 'react';
import styles from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

import { AddPostContainer } from './AddPost/AddPostContainer';

export function Profile(props) {
  return (
    <div>
      <MyPosts profile={props.profile} status={props.status} setStatus={props.setStatusHoc} />
      <AddPostContainer />
    </div>
  );
}
