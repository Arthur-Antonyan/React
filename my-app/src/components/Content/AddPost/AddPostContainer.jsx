import React from 'react';
import { connect } from 'react-redux';
import { addPOstActionCreator, changeNewPostTextActionCreator } from '../../../redux/postPage-reducer';
import { AddPost } from './AddPost';

const mapStateToProps = (state) => {
  return {
    areaValue: state.PostPage.newPost,
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPOstActionCreator()),
    onChange: (text) => dispatch(changeNewPostTextActionCreator(text)),
  };
};
export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
