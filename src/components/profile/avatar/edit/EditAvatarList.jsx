import UpdateListItem from "./UpdateListItem";
import CropListItem from "./CropListItem";
import DecorListItem from "./DecorListItem";
import {EditAvatarListLiner, StyledAvatarEditList} from "../../../../layout/layout";

const EditAvatarList = () => <EditAvatarListLiner>
    <StyledAvatarEditList>
        <UpdateListItem />
        <CropListItem />
        <DecorListItem />
    </StyledAvatarEditList>
</EditAvatarListLiner>
export default EditAvatarList