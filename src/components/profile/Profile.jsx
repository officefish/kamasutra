import Feed from '../feed/Feed';
import React from "react";
import {setTitle} from "../../decorators/@setTitle";
import {CenterColumn} from "../../layout/global/columns/centerColumn";
import {RightColumn} from "../../layout/global/columns/rightColumn";
import AvatarItem from "./avatar/AvatarItem";
import EditAvatarItem from "./avatar/EditAvatarItem";
import AvatarListItem from "./avatar/AvatarListItem";
import {ProfileCenterSectionLiner} from "../../layout/layout";
import AvatarSection from "./avatar/AvatarSection";
import FriendsSection from "./friends/FriendsSection";

@setTitle((props) => {
    if(!props.user) return 'Loading profile...'
    return `${props.user.name}'s Profile`
})
class Profile extends React.Component {
    render () {
        return <>
            <CenterColumn>
                <AvatarSection />
                <FriendsSection />
            </CenterColumn >
            <RightColumn>
                Right
            </RightColumn>
        </>
    }
}
export default Profile;

