import { NavLink } from 'react-router-dom';
import {
    CommunityNavigationSVG,
    GlobalNavigation, MessengerNavigationSVG, NavigationItemLabel,
    NavigationItemLiner,
    NavigationLiner,
    NavigationListItem, NewsNavigationSVG,
    ProfileNavigationSVG
} from "../../layout/layout";

const Navigation = () => {
    return <NavigationLiner>
            <GlobalNavigation >
                <NavigationListItem>
                    <NavLink to="/profile">
                        <NavigationItemLiner>
                            <ProfileNavigationSVG />
                            <NavigationItemLabel>
                                Моя страница
                            </NavigationItemLabel>
                        </NavigationItemLiner>
                    </NavLink>
                </NavigationListItem>
                <NavigationListItem>
                    <NavLink to="/#">
                        <NavigationItemLiner>
                            <NewsNavigationSVG />
                            <NavigationItemLabel>
                                Новости
                            </NavigationItemLabel>
                        </NavigationItemLiner>
                    </NavLink>
                </NavigationListItem>
                <NavigationListItem>
                    <NavLink to="/messenger">
                        <NavigationItemLiner>
                            <MessengerNavigationSVG />
                            <NavigationItemLabel>
                                Сообщения
                            </NavigationItemLabel>
                        </NavigationItemLiner>
                    </NavLink>
                </NavigationListItem>
                <NavigationListItem>
                    <NavLink to="/community">
                        <NavigationItemLiner>
                            <CommunityNavigationSVG />
                            <NavigationItemLabel>
                                Сообщество
                            </NavigationItemLabel>
                        </NavigationItemLiner>
                    </NavLink>
                </NavigationListItem>
            </GlobalNavigation>
            </NavigationLiner>

}

export default Navigation;
//
// <div className='bg-white p-4'>
//     <nav>
//         <li>
//             Моя страница
//         </li>
//         <li>
//             Новости
//         </li>
//     </nav>
// </div>