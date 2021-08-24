import style from './Profile.module.css';

import UserBrand from './UserBrand';
import Feed from '../feed/Feed';

const Profile = (props) => {
    
    return (
        <div className={style.Profile}>
            <UserBrand />
            <Feed />
        </div>
    );
}

export default Profile;