import { stopSubmit } from 'redux-form';
import { LoginApi, userAPI } from '../api/api';
import { authUser } from './authReducer';

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
  initialized: false,
};
function initializeSuccessReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
}
export default initializeSuccessReducer;

export const InitilaizeAC = () => {
  return { type: INITIALIZE_SUCCESS };
};

export const initialize = () => (dispatch) => {
  let initialized = Promise.all([dispatch(authUser())]);
  initialized.then(() => dispatch(InitilaizeAC()));
};
