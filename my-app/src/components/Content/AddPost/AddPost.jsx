import React from 'react';
import { Post } from '../MyPosts/Post/Post';
import styles from './AddPost.module.css';

export function AddPost(props) {
  let link = React.createRef();

  let posts = props.state.PostPage.post;
  let post = posts.map((item) => <Post text={item.text} like={item.like} />);

  const addPost = () => {
    props.addPost();
  };
  const onChange = () => {
    let text = link.current.value;
    props.onChange(text);
  };
  return (
    <div className={styles.content}>
      <div className={styles.item}>
        <textarea onChange={onChange} ref={link} className={styles.textarea} value={props.areaValue}></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.post}>{post}</div>
    </div>
  );
}
