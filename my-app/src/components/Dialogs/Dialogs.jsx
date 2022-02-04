import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import { Messages } from './Messages/Messaages';
import { User } from './Users/Users';
import { WriteMessage } from './WriteMessage/WriteMessaage';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.users}>
        <User users={props.users.user} />
      </div>
      <div className={styles.messages}>
        <Messages messages={props.messages.message} />
        <WriteMessage
          write={props.messages.message}
          // fn={props.fn}
          // newMessage={props.newMessage}
          dispatch={props.dispatch}
          messageAreaValue={props.messageAreaValue}
        />
      </div>
    </div>
  );
};
export default Dialogs;
