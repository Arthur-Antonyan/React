import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, change, newMessage } from './redux/state';
import { send } from './redux/state';
export let renderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App message={messages} users={users} post={post} /> */}
      <App
        content={state}
        fn={send}
        addPost={addPost}
        onChange={change}
        areaValue={state.PostPage.newPost}
        newMessage={newMessage}
        messageAreaValue={state.MessagePage.newMessage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

reportWebVitals();
