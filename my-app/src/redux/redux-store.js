import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import friendsPageReducer from './friendsPage-reducer';
import messagePageReducer from './messagePage-reducer';
import thunkMiddlewware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import postPageReducer from './postPage-reducer';
let reducers = combineReducers({
  MessagePage: messagePageReducer,
  PostPage: postPageReducer,
  FriendsPage: friendsPageReducer,
  auth: authReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddlewware));

export default store;
window.store = store;
