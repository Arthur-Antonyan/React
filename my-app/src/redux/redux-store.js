import { combineReducers, createStore } from 'redux';
import messagePageReducer from './messagePage-reducer';
import postPageReducer from './postPage-reducer';
let reducers = combineReducers({
  MessagePage: messagePageReducer,
  PostPage: postPageReducer,
});
let store = createStore(reducers);
export default store;
window.store = store;
