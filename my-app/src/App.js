import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';

import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router';
import Music from './components/Music/Music';
import { BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Content/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />

        <Nav store={props.store} />
        <div className="app-wraper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
            {/* <Route path="/profile/*" element={<Profile store={props.store} />} /> */}
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<FriendsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
