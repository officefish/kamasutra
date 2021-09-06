import {NavLink} from "react-router-dom";
import {AvatarEditListItemLiner, UpdateAvatarEditListItemSVG} from "../../../../layout/layout";

const UpdateListItem = () => <li>
    <NavLink to='/profile'>
        <AvatarEditListItemLiner>
            <UpdateAvatarEditListItemSVG />
            <span >Обновить</span>
        </AvatarEditListItemLiner>
    </NavLink>
</li>
export default UpdateListItem