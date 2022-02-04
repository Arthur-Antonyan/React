import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { addPost, change, newMessage, subscribe, send, store } from './redux/state';
import { addPost, change, subscribe, store } from './redux/state';
import state from './redux/state';
let renderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App message={messages} users={users} post={post} /> */}
      <App
        content={store.getstate()}
        // addPost={store.addPost.bind(store)}
        dispatch={store.dispatch.bind(store)}
        // onChange={store.change.bind(store)}

        areaValue={store.getstate().PostPage.newPost}
        // fn={store.send.bind(store)}
        // newMessage={store.newMessage.bind(store)}

        messageAreaValue={store.getstate().MessagePage.newMessage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
renderDom(store.getstate());
store.subscribe(renderDom);

reportWebVitals();
