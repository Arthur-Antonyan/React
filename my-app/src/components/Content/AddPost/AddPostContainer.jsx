import React from 'react';
import { connect } from 'react-redux';
import { addPOstActionCreator, changeNewPostTextActionCreator } from '../../../redux/postPage-reducer';
// import StoreContext from '../../../storeContext';
import { AddPost } from './AddPost';

// export function AddPostContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let areaValue = store.getState().PostPage.newPost;
//         const post = () => {
//           store.dispatch(addPOstActionCreator());
//         };
//         const onChange = (text) => {
//           store.dispatch(changeNewPostTextActionCreator(text));
//         };
//         return <AddPost addPost={post} onChange={onChange} areaValue={areaValue} />;
//       }}
//     </StoreContext.Consumer>
//   );
// }

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
