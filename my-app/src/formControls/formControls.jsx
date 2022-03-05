import React from 'react';
import styles from './formControls.module.css';
export const Textarea = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;

  return (
    <div>
      <textarea {...input} {...props} className={hasError ? styles.textarea : ''} />
      <div>{hasError && <span className={styles.span}>{meta.error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;

  return (
    <div>
      <input {...input} {...props} className={hasError ? styles.input : ''} />
      <div>{hasError && <span className={styles.span}>{meta.error}</span>}</div>
    </div>
  );
};
