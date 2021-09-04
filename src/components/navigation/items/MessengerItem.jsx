import {NavLink} from "react-router-dom";
import {NavigationItemLiner} from "../../../layout/navigation/navigationItemLiner";
import {MessengerNavigationSVG} from "../../../layout/navigation/icon/MessengerNavigationSVG";
import {NavigationItemLabel} from "../../../layout/navigation/navigationItemLabel";
import {NavigationListItem} from "../../../layout/navigation/navigationListItem";
import {NavigationAttentionLiner} from "../../../layout/layout";

const MessengerItem = () => <NavigationListItem>
    <NavLink to="/messenger">
        <NavigationItemLiner>
            <MessengerNavigationSVG />
            <NavigationItemLabel>
                Сообщения
            </NavigationItemLabel>
            <NavigationAttentionLiner>2</NavigationAttentionLiner>
        </NavigationItemLiner>
    </NavLink>
</NavigationListItem>
export default MessengerItem