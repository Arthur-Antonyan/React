import { stopSubmit } from 'redux-form';
import { LoginApi, userAPI } from '../api/api';

const ADD_USER_DATA = 'ADD_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
}
export default authReducer;

export const authAC = (id, login, email, isAuth) => {
  return { type: ADD_USER_DATA, data: { id, login, email, isAuth } };
};

export const authUser = () => (dispatch) => {
  userAPI.setUserInfo().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(authAC(id, login, email, true));
    }
  });
};

export const login =
  (email, password, rememberMe = false) =>
  (dispatch) => {
    LoginApi.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(authUser());
      } else dispatch(stopSubmit('login', { _error: data.messages[0] }));
    });
  };
export const logOut = () => (dispatch) => {
  LoginApi.logOut().then((data) => {
    if (data.resultCode === 0) {
      dispatch(authAC(null, null, null, false));
    }
  });
};
