import styles from './Messages.module.css';
export function Messages(props) {
  let messages = props.store.getState().MessagePage.message;
  return messages.map((item) => (
    <div className={styles.message}>
      <p>{item.message}</p>
    </div>
  ));
}
