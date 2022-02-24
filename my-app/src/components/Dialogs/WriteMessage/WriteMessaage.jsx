import React from 'react';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';
import styles from './WriteMessage.module.css';

export function WriteMessage(props) {
  let link = React.createRef();

  // let messages = props.store.getState().MessagePage.message;
  let messages = props.state.MessagePage.message;
  let messageElements = messages.map((item) => (
    <div className={styles.message}>
      <p>{item.message}</p>
    </div>
  ));
  const send = () => {
    props.sendMessage();
    // props.dispatch({ type: 'SEND-NEW-MESSAGE' });
    // props.dispatch(sendNewMessageActionCreator());
  };
  const onChange = () => {
    let text = link.current.value;
    props.newMessage(text);
    // props.dispatch({ type: 'WRITE-NEW-MESSAGE', text: text });
    // props.dispatch(writeNewMessageActionCreator(text));
  };
  return (
    <div className={styles.write}>
      <div className={styles.newMessages}>
        <textarea onChange={onChange} ref={link} cols="30" rows="2" value={props.messageAreaValue}></textarea>
        <button onClick={send}>&#8593;</button>
      </div>
      <div className={styles.messageElements}>{messageElements}</div>
    </div>
  );
}
