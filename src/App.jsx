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
                        <div className='bg-white p-4'>
                            <nav>
                                <li>
                                    Моя страница
                                </li>
                                <li>
                                    Новости
                                </li>
                            </nav>
                        </div>
                    </LeftColumn>
                    <CenterColumn>
                        <div className='bg-white p-4'>
                            Center
                        </div>
                    </CenterColumn >
                    <RightColumn>
                        <div className='bg-white p-4'>
                            Right
                        </div>
                    </RightColumn>
                </GlobalDisplay>
            </GlobalContainer>
        <GlobalStyle />
        </ThemeProvider>
    )

}
export default App;

// <Navigation />
// <GlobalContent >Content
//     <Switch>
//         <Route path = "/profile">
//             <Profile />
//         </Route>
//         <Route path = "/messenger">
//             <Messenger />
//         </Route>
//         <Route path = "/community">
//             <Community />
//         </Route>
//     </Switch>
// </GlobalContent>