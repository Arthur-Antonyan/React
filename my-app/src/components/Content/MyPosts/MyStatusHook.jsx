import React, { useEffect, useState } from 'react';

import styles from './MyPosts.module.css';

const MyStatusHook = (props) => {
  const [reductMode, setReducMode] = useState(false);
  const [status, updateStatus] = useState(props.status);
  const activate = () => {
    setReducMode(true);
  };

  const deActivate = () => {
    setReducMode(false);
    props.setStatus(status);
  };

  const setstatus = (event) => {
    updateStatus(event.currentTarget.value);
  };
  useEffect(() => {
    updateStatus(props.status);
  }, [props.status]);
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
