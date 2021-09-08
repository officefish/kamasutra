import React from "react";
import {setTitle} from "../../decorators/@setTitle";
import {CenterColumn} from "../../layout/global/columns/centerColumn";
import {RightColumn} from "../../layout/global/columns/rightColumn";
import AvatarSection from "./avatar/AvatarSection";
import FriendsSection from "./friends/FriendsSection";
import MusicSection from "./music/MusicSection";
import InfoSection from "./info/InfoSection";

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
                <MusicSection />
            </CenterColumn>
            <RightColumn>
                <InfoSection />
            </RightColumn>
        </>
    }
}
export default Profile;


