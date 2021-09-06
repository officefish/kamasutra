import AvatarItem from "./AvatarItem";
import EditAvatarItem from "./EditAvatarItem";
import AvatarListItem from "./AvatarListItem";
import {ProfileCenterSectionLiner} from "../../../layout/profile/profileCenterSectionLiner";

const AvatarSection = () => <ProfileCenterSectionLiner>
    <AvatarItem />
    <EditAvatarItem />
    <AvatarListItem />
</ProfileCenterSectionLiner>
export default AvatarSection