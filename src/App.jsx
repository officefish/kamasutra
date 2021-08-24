import logo from './logo.svg';
import style from './App.module.css';

import Header from './components/header/Header';
import Navigation from "./components/navigation/Navigation"
import Messenger from "./components/messenger/Messenger"
import Profile from './components/profile/Profile';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={style.App}>
      <Header />
      <Navigation />
      <div className={style.Content}>
        <Route path="/profile" render={<Profile />} />
        {/*<Route path="/messenger" render={messenger} />*/}
      </div>  
    </div>
    );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It-Kamasutra.com <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
