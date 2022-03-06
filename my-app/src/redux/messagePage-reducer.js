const WRITE_NEW_MESSAGE = 'WRITE-NEW-MESSAGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
  newMessage: '',
  message: [
    { id: 1, message: 'Hello albviebieqblqebflqibf' },
    { id: 2, message: 'How are flqbflqeibfgiqrb3hot13hgt13hgt3hg34hgoi3;hgo3;hg3ohgf3o41hgf3o1hfg31o4hgf3pigfq3piugfqp3fyou' },
    { id: 3, message: 'yo qelbglqebfqlbjqbfqfjhw bfj bf' },
  ],
  user: [
    { name: 'John', path: 1, img: 'https://img.lovepik.com/element/45001/3052.png_860.png' },
    {
      name: 'Josh',
      path: 2,
      img: 'https://img.lovepik.com/element/45001/3052.png_860.png',
    },
    { name: 'Nelly', path: 3, img: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { name: 'Rob', path: 4, img: 'https://img.lovepik.com/element/45001/3052.png_860.png' },
    { name: 'Angel', path: 5, img: 'https://www.w3schools.com/w3images/avatar5.png' },
    {
      name: 'Scarlet',
      path: 6,
      img: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
    },
  ],
};
function messagePageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        message: [...state.message, { message: action.text }],
        newMessage: '',
      };

    default:
      return state;
  }
}
export default messagePageReducer;

export const sendNewMessageActionCreator = (text) => {
  return { type: SEND_NEW_MESSAGE, text };
};
