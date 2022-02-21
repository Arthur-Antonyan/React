import React from 'react';
import { addPOstActionCreator, changeNewPostTextActionCreator } from '../../../redux/postPage-reducer';
import styles from './AddPost.module.css';

export function AddPost(props) {
  let link = React.createRef();
  const post = () => {
    props.addPost();
    // props.dispatch({ type: 'ADD-POST' });
    // props.dispatch(addPOstActionCreator());
  };
  const onChange = () => {
    let text = link.current.value;
    props.onChange(text);
    // props.dispatch({ type: 'CHANGE-NEWPOST-TEXT', text: text });
    // props.dispatch(changeNewPostTextActionCreator(text));
  };
  return (
    <div className={styles.content}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png" />
      <div className={styles.item}>
        <textarea
          onChange={onChange}
          ref={link}
          className={styles.textarea}
          cols="20"
          rows="3"
          value={props.areaValue}
        ></textarea>
        <div>
          <button onClick={post}>Add post</button>
        </div>
      </div>
    </div>
  );
}
