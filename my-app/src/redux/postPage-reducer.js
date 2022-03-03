import { ProfileAPI, userAPI } from '../api/api';

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEWPOST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_PROFILE_INFO = 'ADD_PROFILE_INFO';
const GET_STATUS = 'GET_STATUS';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  post: [
    { id: 1, text: 'Post1', like: 'Like3' },
    { id: 2, text: 'Post2', like: 'Like4' },
  ],
  newPost: '',
  profile: null,
  status: '',
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
    case GET_STATUS:
      return {
        ...state,
        status: action.status,
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
export const addProfileInfoAC = (profile) => {
  return { type: ADD_PROFILE_INFO, profile };
};

export const addProfileInfo = (userId) => (dispatch) => {
  userAPI.getUsersProfileInfo(userId).then((data) => dispatch(addProfileInfoAC(data)));
};

const getStatus = (status) => {
  return { type: GET_STATUS, status };
};
const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const getStatusHoc = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then((data) => dispatch(getStatus(data)));
};

export const setStatusHoc = (status) => (dispatch) => {
  ProfileAPI.setStatus(status).then((response) => {
    if (response.data.resultCode === 0) dispatch(getStatus(status));
  });
};
