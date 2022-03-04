import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Post } from '../MyPosts/Post/Post';
import styles from './AddPost.module.css';

const PostForm = (props) => {
  return (
    <form className={styles.item} onSubmit={props.handleSubmit}>
      <Field name="postArea" component="textarea" type="text" className={styles.textarea} />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: 'addPost' })(PostForm);

export function AddPost(props) {
  // let link = React.createRef();

  let posts = props.state.PostPage.post;
  let post = posts.map((item) => <Post text={item.text} like={item.like} />);

  const addPost = (text) => {
    props.addPost(text);
  };
  // const onChange = (text) => {
  //   // let text = link.current.value;
  //   props.onChange(text);
  // };
  const onSubmit = (formData) => {
    // onChange(formData.postArea);
    addPost(formData.postArea);
    formData.postArea = '';
  };

  return (
    <div className={styles.content}>
      {/* <div className={styles.item}>
        <textarea onChange={onChange} ref={link} className={styles.textarea} value={props.areaValue}></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div> */}
      <PostReduxForm onSubmit={onSubmit} />
      <div className={styles.post}>{post}</div>
    </div>
  );
}
