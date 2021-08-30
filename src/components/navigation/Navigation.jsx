import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header >
            <nav >
                <ul>
                <li><NavLink to="/profile">Feed</NavLink></li>
                <li><NavLink to="/messenger">Messages</NavLink></li>
                <li><NavLink to="/community">Users</NavLink></li>
                <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;