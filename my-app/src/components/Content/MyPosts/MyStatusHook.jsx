import React, { useState } from 'react';

import styles from './MyPosts.module.css';

const MyStatusHook = (props) => {
  const [reductMode, setReducMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const activate = () => {
    setReducMode(true);
  };

  const deActivate = () => {
    setReducMode(false);
    props.setStatus(status);
  };

  const setstatus = (event) => {
    setStatus(event.currentTarget.value);
  };
  return (
    <div className={styles.status}>
      {!reductMode && (
        <div>
          <span onDoubleClick={activate}>{props.status || 'no status'}</span>
        </div>
      )}
      {reductMode && (
        <div>
          <input autoFocus={true} onBlur={deActivate} onChange={setstatus} value={status} />
        </div>
      )}
    </div>
  );
};
export default MyStatusHook;
