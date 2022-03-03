import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendNewMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/messagePage-reducer';

import withAuthHoc from '../../hocs/withAuthHoc';

import { WriteMessage } from './WriteMessaage';

// let withAuthRedirect = withAuthHoc(WriteMessage);

const mapStateToProps = (state) => {
  return {
    messageAreaValue: state.MessagePage.newMessage,
    state: state,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendNewMessageActionCreator()),
    newMessage: (text) => dispatch(writeNewMessageActionCreator(text)),
  };
};
// export const WriteMessageContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect);

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthHoc)(WriteMessage);
