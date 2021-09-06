import {NavLink} from "react-router-dom";
import {AvatarEditListItemLiner, CropAvatarEditListItemSVG} from "../../../../layout/layout";

const CropListItem = () => <li>
    <NavLink to='/profile'>
        <AvatarEditListItemLiner>
            <CropAvatarEditListItemSVG />
            <span>Кадрировать</span>
        </AvatarEditListItemLiner>
    </NavLink>
</li>
export default CropListItem