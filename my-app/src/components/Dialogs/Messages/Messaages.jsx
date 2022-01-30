import styles from './Messages.module.css';
export function Messages(props) {
  return props.messages.map((item) => (
    <div className={styles.message}>
      <p>{item.message}</p>
    </div>
  ));
}
