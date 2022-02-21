import React from 'react';
import { addPOstActionCreator, changeNewPostTextActionCreator } from '../../../redux/postPage-reducer';
import { AddPost } from './AddPost';

export function AddPostContainer(props) {
  let areaValue = props.store.getState().PostPage.newPost;
  const post = () => {
    props.store.dispatch(addPOstActionCreator());
  };
  const onChange = (text) => {
    props.store.dispatch(changeNewPostTextActionCreator(text));
  };
  return <AddPost addPost={post} onChange={onChange} areaValue={areaValue} />;
}
