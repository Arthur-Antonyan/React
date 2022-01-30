let state = {
  MessagePage: {
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
      { text: 'Post1', like: 'Like3' },
      { text: 'Post2', like: 'Like4' },
    ],
  },
};
export const send = (text) => {
  state.MessagePage.message.push({ message: text });
};

export default state;
