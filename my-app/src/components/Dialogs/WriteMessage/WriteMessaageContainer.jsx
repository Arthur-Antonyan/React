import React from 'react';
import { connect } from 'react-redux';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';
// import StoreContext from '../../../storeContext';
import { WriteMessage } from './WriteMessaage';

// export function WriteMessageContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let areaValue = store.getState().MessagePage.newMessage;
//         const send = () => {
//           store.dispatch(sendNewMessageActionCreator());
//         };
//         const onChange = (text) => {
//           store.dispatch(writeNewMessageActionCreator(text));
//         };
//         return <WriteMessage newMessage={onChange} sendMessage={send} messageAreaValue={areaValue} />;
//       }}
//     </StoreContext.Consumer>
//   );
// }
const mapStateToProps = (state) => {
  return {
    messageAreaValue: state.MessagePage.newMessage,
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendNewMessageActionCreator()),
    newMessage: (text) => dispatch(writeNewMessageActionCreator(text)),
  };
};
export const WriteMessageContainer = connect(mapStateToProps, mapDispatchToProps)(WriteMessage);
