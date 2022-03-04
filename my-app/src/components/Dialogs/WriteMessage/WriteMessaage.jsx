import React from 'react';
import { Navigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';
import styles from './WriteMessage.module.css';

// const Message = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit} className={styles.newMessages}>
//       <Field name="message" type="text" component="textarea" />
//       <button>&#8593;</button>
//     </form>
//   );
// };
class Message extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={styles.newMessages}>
        <Field name="message" type="text" component="textarea" />
        <button>&#8593;</button>
      </form>
    );
  }
}
const MessageReduxForm = reduxForm({ form: 'writeMessage' })(Message);

export function WriteMessage(props) {
  // let link = React.createRef();

  // let messages = props.store.getState().MessagePage.message;
  let messages = props.state.MessagePage.message;
  let messageElements = messages.map((item) => (
    <div className={styles.message}>
      <p>{item.message}</p>
    </div>
  ));
  const send = (text) => {
    props.sendMessage(text);
  };
  // const onChange = (text) => {
  //   // let text = link.current.value;
  //   props.newMessage(text);
  // };
  const onSubmit = (formData) => {
    // onChange(formData.message);
    send(formData.message);
    formData.message = '';
  };
  return (
    <div className={styles.write}>
      {/* <div className={styles.newMessages}>
        <textarea onChange={onChange} ref={link} cols="30" rows="2" value={props.messageAreaValue}></textarea>
        <button onClick={send}>&#8593;</button>
      </div> */}
      <MessageReduxForm onSubmit={onSubmit} />
      <div className={styles.messageElements}>{messageElements}</div>
    </div>
  );
}
