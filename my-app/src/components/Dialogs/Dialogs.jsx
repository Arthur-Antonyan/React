import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import { Messages } from './Messages/Messaages';
import { User } from './Users/Users';
// import { WriteMessage } from './WriteMessage/WriteMessaage';
import { WriteMessageContainer } from './WriteMessage/WriteMessaageContainer';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.users}>
        <User store={props.store} />
      </div>
      <div className={styles.messages}>
        {/* <Messages store={props.store} /> */}
        {/* <WriteMessageContainer store={props.store} /> */}
        <WriteMessageContainer />
      </div>
    </div>
  );
};
export default Dialogs;
