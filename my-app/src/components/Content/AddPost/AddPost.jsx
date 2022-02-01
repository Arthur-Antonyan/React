import React from 'react';
import styles from './AddPost.module.css';

export function AddPost(props) {
  let link = React.createRef();
  const post = () => {
    // let text = link.current.value;
    props.addPost();
    // link.current.value = '';
  };
  const onChange = () => {
    let text = link.current.value;
    props.onChange(text);
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
