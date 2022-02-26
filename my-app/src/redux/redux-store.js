import { combineReducers, createStore } from 'redux';
import friendsPageReducer from './friendsPage-reducer';
import messagePageReducer from './messagePage-reducer';

import postPageReducer from './postPage-reducer';
let reducers = combineReducers({
  MessagePage: messagePageReducer,
  PostPage: postPageReducer,
  FriendsPage: friendsPageReducer,
});
let store = createStore(reducers);
export default store;
window.store = store;
