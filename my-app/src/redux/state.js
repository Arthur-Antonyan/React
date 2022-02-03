// import { renderDom } from '../render';
// let renderDom = () => {};

export let store = {
  renderDom() {},

  _state: {
    MessagePage: {
      newMessage: '',
      message: [
        { message: 'Hello albviebieqblqebflqibf' },
        {
          message: 'How are flqbflqeibfgiqrb3hot13hgt13hgt3hg34hgoi3;hgo3;hg3ohgf3o41hgf3o1hfg31o4hgf3pigfq3piugfqp3fyou',
        },
        { message: 'yo qelbglqebfqlbjqbfqfjhw bfj bf' },
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
    },
    PostPage: {
      post: [
        { id: 1, text: 'Post1', like: 'Like3' },
        { id: 2, text: 'Post2', like: 'Like4' },
      ],
      newPost: '',
    },
  },
  getstate() {
    return this._state;
  },

  send() {
    this._state.MessagePage.message.push({ message: this._state.MessagePage.newMessage });
    this._state.MessagePage.newMessage = '';
    this.renderDom(this._state);
  },
  newMessage(text) {
    this._state.MessagePage.newMessage = text;
    this.renderDom(this._state);
  },

  addPost() {
    this._state.PostPage.post.push({ id: 3, text: this._state.PostPage.newPost, like: 'Like 5' });
    this._state.PostPage.newPost = '';
    this.renderDom(this._state);
  },
  change(text) {
    this._state.PostPage.newPost = text;
    this.renderDom(this._state);
  },
  subscribe(observer) {
    this.renderDom = observer;
  },
};
// let state = {
//   MessagePage: {
//     newMessage: '',
//     message: [
//       { message: 'Hello albviebieqblqebflqibf' },
//       {
//         message: 'How are flqbflqeibfgiqrb3hot13hgt13hgt3hg34hgoi3;hgo3;hg3ohgf3o41hgf3o1hfg31o4hgf3pigfq3piugfqp3fyou',
//       },
//       { message: 'yo qelbglqebfqlbjqbfqfjhw bfj bf' },
//     ],
//     user: [
//       { name: 'John', path: 1, img: 'https://img.lovepik.com/element/45001/3052.png_860.png' },
//       {
//         name: 'Josh',
//         path: 2,
//         img: 'https://img.lovepik.com/element/45001/3052.png_860.png',
//       },
//       { name: 'Nelly', path: 3, img: 'https://www.w3schools.com/howto/img_avatar2.png' },
//       { name: 'Rob', path: 4, img: 'https://img.lovepik.com/element/45001/3052.png_860.png' },
//       { name: 'Angel', path: 5, img: 'https://www.w3schools.com/w3images/avatar5.png' },
//       {
//         name: 'Scarlet',
//         path: 6,
//         img: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
//       },
//     ],
//   },
//   PostPage: {
//     post: [
//       { id: 1, text: 'Post1', like: 'Like3' },
//       { id: 2, text: 'Post2', like: 'Like4' },
//     ],
//     newPost: '',
//   },
// };
// export default state;
// export const send = () => {
//   state.MessagePage.message.push({ message: state.MessagePage.newMessage });
//   state.MessagePage.newMessage = '';
//   renderDom(state);
// };
// export const newMessage = (text) => {
//   state.MessagePage.newMessage = text;
//   renderDom(state);
// };

// export const addPost = () => {
//   state.PostPage.post.push({ id: 3, text: state.PostPage.newPost, like: 'Like 5' });
//   state.PostPage.newPost = '';
//   renderDom(state);
// };
// export const change = (text) => {
//   state.PostPage.newPost = text;
//   renderDom(state);
// };

// export const subscribe = (observer) => {
//   renderDom = observer;
// };

window.store = store;
