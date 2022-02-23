import StoreContext from '../../../storeContext';
import styles from './Messages.module.css';
// export function Messages(props) {
//   let messages = props.store.getState().MessagePage.message;
//   return messages.map((item) => (
//     <div className={styles.message}>
//       <p>{item.message}</p>
//     </div>
//   ));
// }

export function Messages(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let messages = store.getState().MessagePage.message;
        return messages.map((item) => (
          <div className={styles.message}>
            <p>{item.message}</p>
          </div>
        ));
      }}
    </StoreContext.Consumer>
  );
}
