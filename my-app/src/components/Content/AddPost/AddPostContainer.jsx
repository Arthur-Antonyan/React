import React from 'react';
import { addPOstActionCreator, changeNewPostTextActionCreator } from '../../../redux/postPage-reducer';
import StoreContext from '../../../storeContext';
import { AddPost } from './AddPost';

// export function AddPostContainer(props) {
//   let areaValue = props.store.getState().PostPage.newPost;
//   const post = () => {
//     props.store.dispatch(addPOstActionCreator());
//   };
//   const onChange = (text) => {
//     props.store.dispatch(changeNewPostTextActionCreator(text));
//   };
//   return <AddPost addPost={post} onChange={onChange} areaValue={areaValue} />;
// }

export function AddPostContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let areaValue = store.getState().PostPage.newPost;
        const post = () => {
          store.dispatch(addPOstActionCreator());
        };
        const onChange = (text) => {
          store.dispatch(changeNewPostTextActionCreator(text));
        };
        return <AddPost addPost={post} onChange={onChange} areaValue={areaValue} />;
      }}
    </StoreContext.Consumer>
  );
}
