import {NavigationListItem} from "../../../layout/navigation/navigationListItem";
import {NavLink} from "react-router-dom";
import {NavigationItemLiner} from "../../../layout/navigation/navigationItemLiner";
import {CommunityNavigationSVG} from "../../../layout/navigation/icon/CommunityNavigationSVG";
import {NavigationItemLabel} from "../../../layout/navigation/navigationItemLabel";

const CommunityItem = () => <NavigationListItem>
    <NavLink to="/community">
        <NavigationItemLiner>
            <CommunityNavigationSVG />
            <NavigationItemLabel>
                Сообщество
            </NavigationItemLabel>
        </NavigationItemLiner>
    </NavLink>
</NavigationListItem>
export default CommunityItem