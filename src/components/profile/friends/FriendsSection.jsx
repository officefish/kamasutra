import {ProfileCenterFriendsSectionLiner} from "../../../layout/layout";
import FriendsSectionHeader from "./header/FriendsSectionHeader";

const FriendsSection = () => <ProfileCenterFriendsSectionLiner>

   <FriendsSectionHeader />

    <div className='grid grid-cols-3 gap-3'>
        <div>
            <div>
                Ava
            </div>
            <div>
                Name
            </div>
        </div>
    </div>

</ProfileCenterFriendsSectionLiner>
export default FriendsSection
