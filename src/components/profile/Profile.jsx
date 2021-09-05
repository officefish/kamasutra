import UserBrand from './userBrand/UserBrand';
import Feed from '../feed/Feed';
import React from "react";
import {setTitle} from "../../decorators/@setTitle";
import {CenterColumn} from "../../layout/global/columns/centerColumn";
import {RightColumn} from "../../layout/global/columns/rightColumn";
import {NavLink} from "react-router-dom";
import AvatarItem from "./avatar/AvatarItem";
import EditAvatarItem from "./avatar/EditAvatarItem";
import AvatarListItem from "./avatar/AvatarListItem";
import {ProfileCenterSectionLiner} from "../../layout/layout";

@setTitle((props) => {
    if(!props.user) return 'Loading profile...'
    return `${props.user.name}'s Profile`
})
class Profile extends React.Component {
    render () {
        return <>
            <CenterColumn>
                <ProfileCenterSectionLiner>
                    <AvatarItem />
                    <EditAvatarItem />
                    <AvatarListItem />
                </ProfileCenterSectionLiner>
                <ProfileCenterSectionLiner>
                    Friends
                </ProfileCenterSectionLiner>
            </CenterColumn >
            <RightColumn>
                <div className='bg-white p-4'>
                    Right
                </div>
            </RightColumn>
        </>
    }
}
export default Profile;

