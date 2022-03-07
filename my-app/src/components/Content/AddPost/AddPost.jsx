import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../formControls/formControls';
import { maxLength, required } from '../../../utils/validate';
import { Post } from '../MyPosts/Post/Post';
import styles from './AddPost.module.css';
const maxlength10 = maxLength(10);

const PostForm = (props) => {
  return (
    <form className={styles.item} onSubmit={props.handleSubmit}>
      <Field name="postArea" component={Textarea} type="text" className={styles.textarea} validate={[required, maxlength10]} />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: 'addPost' })(PostForm);

export const AddPost = React.memo(
  (props) => {
    console.log('render');
    console.log(props);
    let posts = props.state.PostPage.post;
    let post = [...posts].reverse().map((item) => <Post key={item.id} text={item.text} like={item.like} />);

    const addPost = (text) => {
      props.addPost(text);
    };

    const onSubmit = (formData) => {
      addPost(formData.postArea);
      formData.postArea = '';
    };

    return (
      <div className={styles.content}>
        <PostReduxForm onSubmit={onSubmit} />
        <div className={styles.post}>{post}</div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps != nextProps;
  }
);

// export class AddPost extends React.Component {
//   // componentDidMount() {
//   //   return setInterval(() => {
//   //     this.setState({ a: 12 });
//   //   }, 3000);
//   // }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps == this.props || nextState != this.state;
//   }

//   render() {
//     console.log('render');

//     let posts = this.props.state.PostPage.post;
//     let post = posts.map((item) => <Post key={item.id} text={item.text} like={item.like} />);

//     const addPost = (text) => {
//       this.props.addPost(text);
//     };

//     const onSubmit = (formData) => {
//       addPost(formData.postArea);
//       formData.postArea = '';
//     };

//     return (
//       <div className={styles.content}>
//         <PostReduxForm onSubmit={onSubmit} />
//         <div className={styles.post}>{post}</div>
//       </div>
//     );
//   }
// }
