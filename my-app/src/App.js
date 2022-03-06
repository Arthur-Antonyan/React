import './App.css';
import { Nav } from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router';
import Music from './components/Music/Music';
import { BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Content/ProfileContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';

import Preloader from './components/Preloader/Preloader';
import { initialize } from './redux/initialize';
import store from './redux/redux-store';
// setInterval(() => {
//   store.dispatch({ type: 'FAKE' });
// }, 1000);

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <BrowserRouter>
        <div className="app-wraper">
          <HeaderComponent />

          <Nav store={this.props.store} />
          <div className="app-wraper-content">
            <Routes>
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/news" element={<News />} />
              <Route path="/friends" element={<FriendsContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.initialize.initialized,
  };
};
export default connect(mapStateToProps, { initialize })(App);
