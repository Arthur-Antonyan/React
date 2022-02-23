import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext, { Provider } from './storeContext';

// import { store } from './redux/state';

let renderDom = () => {
  ReactDOM.render(
    // <App
    //   // content={store.getState()}   ///without context just props
    //   dispatch={store.dispatch.bind(store)}
    //   store={store}
    // />,
    // <StoreContext.Provider value={store}>      ///context
    //   <App />
    // </StoreContext.Provider>,
    <Provider store={store}>
      <App />
    </Provider>,

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
