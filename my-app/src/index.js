import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import { Provider } from './storeContext';
import { Provider } from 'react-redux';

// let renderDom = () => {
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,

  document.getElementById('root')
);
// };
// renderDom(store.getState());
// // store.subscribe(renderDom);
// store.subscribe(() => {
//   let state = store.getState();
//   renderDom(state);
// });

// reportWebVitals();
