const CHANGE_NEW_POST_TEXT = 'CHANGE-NEWPOST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_PROFILE_INFO = 'ADD_PROFILE_INFO';
let initialState = {
  post: [
    { id: 1, text: 'Post1', like: 'Like3' },
    { id: 2, text: 'Post2', like: 'Like4' },
  ],
  newPost: '',
  profile: null,
};

function postPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: [...state.post, { id: 3, text: state.newPost, like: 'Like 5' }],
        newPost: '',
      };

    case CHANGE_NEW_POST_TEXT:
      return {
        ...state,
        newPost: action.text,
      };
    case ADD_PROFILE_INFO:
      return {
        ...state,
        profile: action.profile,
      };

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
export const addProfileInfo = (profile) => {
  return { type: ADD_PROFILE_INFO, profile };
};
