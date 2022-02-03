import React from 'react';
import styles from './WriteMessage.module.css';
export function WriteMessage(props) {
  let link = React.createRef();
  const send = () => {
    // let text = link.current.value;
    props.fn();
  };
  const onChange = () => {
    let text = link.current.value;
    props.newMessage(text);
    // props.newMessage.newMessage(text);
  };
  return (
    <div className={styles.write}>
      <textarea onChange={onChange} ref={link} cols="30" rows="2" value={props.messageAreaValue}></textarea>
      <button onClick={send}>&#8593;</button>
    </div>
  );
}
