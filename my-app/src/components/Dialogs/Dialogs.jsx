import React from 'react';

import styles from './Dialogs.module.css';

import { User } from './Users/Users';

import { WriteMessageContainer } from './WriteMessage/WriteMessaageContainer';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.users}>
        <User store={props.store} />
      </div>
      <div className={styles.messages}>
        <WriteMessageContainer />
      </div>
    </div>
  );
};
export default Dialogs;
