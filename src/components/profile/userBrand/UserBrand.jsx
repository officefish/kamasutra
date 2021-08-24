import UserCover from "./UserCover"
import UserIcon from "./UserIcon"
import UserInfo from "./UserInfo"

import style from "../Profile.module.css"

const UserBrand = () => {
    return (
        <div className={style.UserBrand}>
            <UserCover />
            <UserIcon />
            <UserInfo />
        </div>
    );
}

export default UserBrand;