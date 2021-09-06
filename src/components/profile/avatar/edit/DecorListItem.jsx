import {NavLink} from "react-router-dom";
import {AvatarEditListItemLiner, DecorAvatarEditListItemSVG} from "../../../../layout/layout";

const DecorListItem = () => <li>
    <NavLink to='/profile'>
        <AvatarEditListItemLiner>
            <DecorAvatarEditListItemSVG />
            <span>Украсить</span>
        </AvatarEditListItemLiner>
    </NavLink>
</li>
export default DecorListItem