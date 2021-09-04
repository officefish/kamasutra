import {NavigationListItem} from "../../../layout/navigation/navigationListItem";
import {NavLink} from "react-router-dom";
import {NavigationItemLiner} from "../../../layout/navigation/navigationItemLiner";
import {GamesNavigationSVG} from "../../../layout/navigation/icon/GamesNavigationSVG";
import {NavigationItemLabel} from "../../../layout/navigation/navigationItemLabel";

const GamesItem = () => <NavigationListItem>
    <NavLink to="/games">
        <NavigationItemLiner>
            <GamesNavigationSVG />
            <NavigationItemLabel>
                Игры
            </NavigationItemLabel>
        </NavigationItemLiner>
    </NavLink>
</NavigationListItem>
export default GamesItem