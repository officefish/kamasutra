import {NavLink} from "react-router-dom";
import {NavigationItemLiner} from "../../../layout/navigation/navigationItemLiner";
import {ProfileNavigationSVG} from "../../../layout/navigation/icon/ProfileNavigationSVG";
import {NavigationItemLabel} from "../../../layout/navigation/navigationItemLabel";
import {NavigationListItem} from "../../../layout/navigation/navigationListItem";

const MyPageItem = () => <NavigationListItem>
    <NavLink to="/profile">
        <NavigationItemLiner>
            <ProfileNavigationSVG />
            <NavigationItemLabel>
                Моя страница
            </NavigationItemLabel>
        </NavigationItemLiner>
    </NavLink>
</NavigationListItem>
export default MyPageItem