import {NavLink} from "react-router-dom";
import {AvatarListItemLiner, AvatarListItemSpan, MemoriesItemSVG} from "../../../../layout/layout";

const MemoriesItem = () => <li>
    <NavLink to='/#'>
        <AvatarListItemLiner>
            <MemoriesItemSVG />
            <AvatarListItemSpan>Воспоминания</AvatarListItemSpan>
        </AvatarListItemLiner>
    </NavLink>
</li>
export default MemoriesItem