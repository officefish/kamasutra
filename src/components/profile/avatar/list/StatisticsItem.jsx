import {NavLink} from "react-router-dom";
import {AvatarListItemLiner, AvatarListItemSpan, StatisticsItemSVG} from "../../../../layout/layout";

const StatisticsItem = () => <li>
    <NavLink to='/profile'>
        <AvatarListItemLiner>
            <StatisticsItemSVG />
            <AvatarListItemSpan>Статистика страницы</AvatarListItemSpan>
        </AvatarListItemLiner>
    </NavLink>
</li>
export default StatisticsItem