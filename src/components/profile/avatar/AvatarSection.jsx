import AvatarItem from "./AvatarItem";
import EditAvatarItem from "./EditAvatarItem";
import AvatarListItem from "./AvatarListItem";
import {ProfileAvatarCenterSectionLiner} from "../../../layout/layout";

const AvatarSection = () => <ProfileAvatarCenterSectionLiner>
    <AvatarItem />
    <EditAvatarItem />
    <AvatarListItem />
</ProfileAvatarCenterSectionLiner>
export default AvatarSection