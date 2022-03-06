import React from 'react';
import { Navigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';
import styles from './WriteMessage.module.css';

const Message = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.newMessages}>
      <Field name="message" type="text" component="textarea" />
      <button>&#8593;</button>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: 'writeMessage' })(Message);

export function WriteMessage(props) {
  let messages = props.state.MessagePage.message;
  let messageElements = messages.map((item) => (
    <div key={item.id} className={styles.message}>
      <p>{item.message}</p>
    </div>
  ));
  const send = (text) => {
    props.sendMessage(text);
  };

  const onSubmit = (formData) => {
    send(formData.message);
    formData.message = '';
  };
  return (
    <div className={styles.write}>
      <MessageReduxForm onSubmit={onSubmit} />
      <div className={styles.messageElements}>{messageElements}</div>
    </div>
  );
}
