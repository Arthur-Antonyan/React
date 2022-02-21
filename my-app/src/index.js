import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

// import { store } from './redux/state';

let renderDom = (state) => {
  ReactDOM.render(
    <App
      content={store.getState()}
      // dispatch={store.dispatch.bind(store)}
      // areaValue={store.getState().PostPage.newPost}
      // messageAreaValue={store.getState().MessagePage.newMessage}
      store={store}
    />,

    document.getElementById('root')
  );
};
renderDom(store.getState());
// store.subscribe(renderDom);
store.subscribe(() => {
  let state = store.getState();
  renderDom(state);
});

reportWebVitals();
