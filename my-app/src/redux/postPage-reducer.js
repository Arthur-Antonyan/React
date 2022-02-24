const CHANGE_NEW_POST_TEXT = 'CHANGE-NEWPOST-TEXT';
const ADD_POST = 'ADD-POST';
let initialState = {
  post: [
    { id: 1, text: 'Post1', like: 'Like3' },
    { id: 2, text: 'Post2', like: 'Like4' },
  ],
  newPost: '',
};

function postPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let stateCopy = { ...state };
      stateCopy.post = [...state.post];
      // state.post.push({ id: 3, text: state.newPost, like: 'Like 5' });
      // state.newPost = '';
      // return state;
      stateCopy.post.push({ id: 3, text: state.newPost, like: 'Like 5' });
      stateCopy.newPost = '';
      return stateCopy;

    case CHANGE_NEW_POST_TEXT:
      let stateCopy1 = { ...state };

      // state.newPost = action.text;
      // return state;
      stateCopy1.newPost = action.text;
      return stateCopy1;

    default:
      return state;
  }
}
export default postPageReducer;

export const changeNewPostTextActionCreator = (text) => {
  return { type: CHANGE_NEW_POST_TEXT, text: text };
};
export const addPOstActionCreator = () => {
  return { type: ADD_POST };
};
