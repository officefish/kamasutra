import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <header className={style.NavSidebar}>
            <nav className={style.Navigation}>
                <ul>
                <li><NavLink to="/profile">Feed</NavLink></li>
                <li><NavLink to="/messenger">Messages</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;