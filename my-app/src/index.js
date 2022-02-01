import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { renderDom } from './render';
// import reportWebVitals from './reportWebVitals';
import state from './redux/state';
renderDom(state);
// renderDom(send);
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App message={messages} users={users} post={post} /> */}
//     <App content={state} fn={send} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { addPost, change, newMessage } from './redux/state';
// import { send } from './redux/state';
// import state from './redux/state';
// export let renderDom = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       {/* <App message={messages} users={users} post={post} /> */}
//       <App
//         content={state}
//         fn={send}
//         addPost={addPost}
//         onChange={change}
//         areaValue={state.PostPage.newPost}
//         newMessage={newMessage}
//         messageAreaValue={state.MessagePage.newMessage}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };

// reportWebVitals();
