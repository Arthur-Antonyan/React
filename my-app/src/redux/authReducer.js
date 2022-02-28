import { userAPI } from '../api/api';

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
        isAuth: true,
      };

    default:
      return state;
  }
}
export default authReducer;

export const authAC = (id, login, email) => {
  return { type: ADD_USER_DATA, data: { id, login, email } };
};

export const authUser = () => (dispatch) => {
  userAPI.setUserInfo().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(authAC(id, login, email));
    }
  });
};
