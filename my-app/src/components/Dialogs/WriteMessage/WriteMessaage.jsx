import React from 'react';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';
import styles from './WriteMessage.module.css';

export function WriteMessage(props) {
  let link = React.createRef();
  const send = () => {
    // props.fn();
    // props.dispatch({ type: 'SEND-NEW-MESSAGE' });
    props.dispatch(sendNewMessageActionCreator());
  };
  const onChange = () => {
    let text = link.current.value;
    // props.newMessage(text);
    // props.dispatch({ type: 'WRITE-NEW-MESSAGE', text: text });
    // debugger;
    props.dispatch(writeNewMessageActionCreator(text));
  };
  return (
    <div className={styles.write}>
      <textarea onChange={onChange} ref={link} cols="30" rows="2" value={props.messageAreaValue}></textarea>
      <button onClick={send}>&#8593;</button>
    </div>
  );
}
