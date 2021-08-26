import style from './Profile.module.css';

import UserBrand from './userBrand/UserBrand';
import Feed from '../feed/Feed';
import React from "react";
import {setTitle} from "../../decorators/@setTitle";

@setTitle((props) => {
    if(!props.user) return 'Loading profile...'
    return `${props.user.name}'s Profile`
})
class Profile extends React.Component {
    render () {
        return  <div className={style.Profile}>
            <UserBrand/>
            <Feed/>
        </div>
    }
}
export default Profile;

