import { NavLink } from 'react-router-dom';
import {GlobalNavigation} from "../../layout/layout";

const Navigation = () => {
    return (

        <GlobalNavigation >
            <ul>
            <li><NavLink to="/profile">Feed</NavLink></li>
            <li><NavLink to="/messenger">Messages</NavLink></li>
            <li><NavLink to="/community">Users</NavLink></li>
            <li><a href="#">Settings</a></li>
            </ul>
        </GlobalNavigation>
    );
}

export default Navigation;