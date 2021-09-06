import {NavLink} from "react-router-dom";
import {ArchiveItemSVG, AvatarListItemLiner, AvatarListItemSpan} from "../../../../layout/layout";

const ArchiveItem = () => <li>
    <NavLink to='/profile'>
        <AvatarListItemLiner>
            <ArchiveItemSVG />
            <AvatarListItemSpan>Архив новостей</AvatarListItemSpan>
        </AvatarListItemLiner>
    </NavLink>
</li>
export default ArchiveItem