import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
// let messages = [{ message: 'Hello' }, { message: 'How are you' }, { message: 'yo' }];
// let users = [
//   { name: 'John', path: 1 },
//   { name: 'Xcho', path: 2 },
//   { name: 'Arev', path: 3 },
//   { name: 'Hayk', path: 4 },
//   { name: 'Ruzan', path: 5 },
//   { name: 'Luso', path: 6 },
// ];
// let post = [
//   { text: 'Post1', like: 'Like3' },
//   { text: 'Post2', like: 'Like4' },
// ];
ReactDOM.render(
  <React.StrictMode>
    {/* <App message={messages} users={users} post={post} /> */}
    <App content={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
