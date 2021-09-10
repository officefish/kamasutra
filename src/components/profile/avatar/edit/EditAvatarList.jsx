import UpdateListItem from "./UpdateListItem";
import CropListItem from "./CropListItem";
import DecorListItem from "./DecorListItem";
import {EditAvatarListLiner, StyledAvatarEditList} from "../../../../layout/layout";

const EditAvatarList = (props) => <EditAvatarListLiner $hover={props.isHover}>
    <StyledAvatarEditList>
        <UpdateListItem />
        <CropListItem />
        <DecorListItem />
    </StyledAvatarEditList>
</EditAvatarListLiner>
export default EditAvatarList