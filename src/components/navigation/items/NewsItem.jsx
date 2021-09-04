import {NavigationListItem} from "../../../layout/navigation/navigationListItem";
import {NavLink} from "react-router-dom";
import {NavigationItemLiner} from "../../../layout/navigation/navigationItemLiner";
import {NewsNavigationSVG} from "../../../layout/navigation/icon/NewsNavigationSVG";
import {NavigationItemLabel} from "../../../layout/navigation/navigationItemLabel";

const NewsItem = () => <NavigationListItem>
    <NavLink to="/#">
        <NavigationItemLiner>
            <NewsNavigationSVG />
            <NavigationItemLabel>
                Новости
            </NavigationItemLabel>
        </NavigationItemLiner>
    </NavLink>
</NavigationListItem>
export default NewsItem