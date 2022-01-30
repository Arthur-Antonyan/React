import React from 'react';
import styles from './WriteMessage.module.css';
export function WriteMessage(props) {
  let link = React.createRef();
  const send = () => {
    let text = link.current.value;
    console.log(props.write);
    // props.write.push({ message: text });
    props.fn(text);
    link.current.value = '';
  };

  return (
    <div className={styles.write}>
      <textarea ref={link} cols="30" rows="2"></textarea>
      <button onClick={send}>&#8593;</button>
    </div>
  );
}
