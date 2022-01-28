import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import { Messages, User } from './Users';

const Dialogs = (props) => {
  let users = [
    { name: 'John', path: 1 },
    { name: 'Xcho', path: 2 },
    { name: 'Arev', path: 3 },
    { name: 'Hayk', path: 4 },
    { name: 'Ruzan', path: 5 },
    { name: 'Luso', path: 6 },
  ];
  let messages = [{ message: 'Hello' }, { message: 'How are you' }, { message: 'yo' }];
  let user = users.map((item) => <User path={item.path} name={item.name} />);
  let message = messages.map((item) => <Messages message={item.message} />);
  return (
    <div className={styles.dialogs}>
      <div className={styles.users}>
        {/* <User path={users[0].path} name={users[0].name} className={styles.user} />
        <User path={users[1].path} name={users[1].name} className={styles.user} />
        <User path={users[5].path} name={users[2].name} className={styles.user} /> */}

        {user}
      </div>
      <div className={styles.messages}>
        {/* <Messages className={styles.message} message={messages[0].message} />
        <Messages className={styles.message} message={messages[1].message} />
        <Messages className={styles.message} message={messages[2].message} /> */}
        {message}
      </div>
    </div>
  );
};
export default Dialogs;
