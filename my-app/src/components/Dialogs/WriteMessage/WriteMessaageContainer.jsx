import React from 'react';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';
import { WriteMessage } from './WriteMessaage';

export function WriteMessageContainer(props) {
  let areaValue = props.store.getState().MessagePage.newMessage;
  const send = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };
  const onChange = (text) => {
    // props.store.newMessage(text);
    // props.dispatch({ type: 'WRITE-NEW-MESSAGE', text: text });
    // debugger;
    props.store.dispatch(writeNewMessageActionCreator(text));
  };
  return <WriteMessage newMessage={onChange} sendMessage={send} messageAreaValue={areaValue} />;
}
