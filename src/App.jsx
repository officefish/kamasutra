import logo from './logo.svg';

import './styles/tailwind.css';
import './styles/theme.css'

import Header from './components/header/Header';
import Navigation from "./components/navigation/Navigation"
import Messenger from "./components/messenger/Messenger"
import Profile from './components/profile/Profile';

import { Route, Switch } from 'react-router-dom';
import Community from './components/community/Community';
import {ThemeProvider} from "styled-components";
import {
    GlobalStyle,
    GlobalContainer, GlobalDisplay, LeftColumn, CenterColumn, RightColumn
} from "./layout/layout";

const App = () =>
{
    return (
        <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
            <Header />
            <GlobalContainer>
                <GlobalDisplay>
                    <LeftColumn>
                        <Navigation />
                    </LeftColumn>
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
                </GlobalDisplay>
            </GlobalContainer>
        <GlobalStyle />
        </ThemeProvider>
    )
}
export default App;

// <Navigation />
// <GlobalContent >Content
//
// </GlobalContent>