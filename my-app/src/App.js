import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router';
import Music from './components/Music/Music';
import { BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        {/* <Nav friends={props.content.MessagePage} /> */}
        <Nav store={props.store} />
        <div className="app-wraper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  store={props.store}
                  // users={props.content.MessagePage}
                />
              }
            />
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
