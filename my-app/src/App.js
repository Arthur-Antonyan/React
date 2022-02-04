import logo from './logo.svg';
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
        <Nav friends={props.content.MessagePage} />
        <div className="app-wraper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  messages={props.content.MessagePage}
                  users={props.content.MessagePage}
                  // fn={props.fn}
                  // newMessage={props.newMessage}
                  dispatch={props.dispatch}
                  messageAreaValue={props.messageAreaValue}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.content.PostPage}
                  // addPost={props.addPost}
                  // onChange={props.onChange}
                  dispatch={props.dispatch}
                  areaValue={props.areaValue}
                />
              }
            />
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
