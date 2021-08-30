import logo from './logo.svg';

import './styles/tailwind.css';
import tw from 'tailwind-styled-components'
import './styles/theme.css'

import Header from './components/header/Header';
import Navigation from "./components/navigation/Navigation"
import Messenger from "./components/messenger/Messenger"
import Profile from './components/profile/Profile';

import { Route, Switch } from 'react-router-dom';
import Community from './components/community/Community';

const App = () =>
{
    return <div >
                <Header />
                <Navigation />
                <div >
                    <Switch>
                        <Route path = "/profile">
                            <Profile />
                        </Route>
                        <Route path = "/messenger">
                            <Messenger />
                        </Route>
                        <Route path = "/community">
                            <Community />
                        </Route>
                    </Switch>
                </div>
            </div>
}
export default App;