import style from './Profile.module.css';

import UserBrand from './userBrand/UserBrand';
import Feed from '../feed/Feed';

const Profile = () =>
{
    return  <div className={style.Profile}>
               <UserBrand/>
               <Feed/>
            </div>

}
export default Profile;