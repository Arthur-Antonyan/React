import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import { Messages } from './Messages/Messaages';
import { User } from './Users/Users';
import { WriteMessage } from './WriteMessage/WriteMessaage';
import { WriteMessageContainer } from './WriteMessage/WriteMessaageContainer';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.users}>
        <User users={props.users.user} />
      </div>
      <div className={styles.messages}>
        {/* <Messages messages={props.messages.message} /> */}
        <Messages store={props.store} />
        <WriteMessageContainer
          // write={props.messages.message}
          // dispatch={props.dispatch}
          // messageAreaValue={props.messageAreaValue}
          store={props.store}
        />
      </div>
    </div>
  );
};
export default Dialogs;
