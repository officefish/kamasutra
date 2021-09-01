import React from "react";
import {StyledLeftSideItems} from "../../layout/header/styledLeftSideItems";
import LogoItem from "./logo/LogoItem";
import SearchItem from "./search/SearchItem";
import NotificationItem from "./notification/NotificationItem";
import PlayerItem from "./player/PlayerItem";

class HeaderBarLeftSideItems extends React.Component {
    render () {
        return <StyledLeftSideItems>
            <LogoItem />
            <SearchItem />
            <NotificationItem />
            <PlayerItem />
        </StyledLeftSideItems>
    }
}
export default HeaderBarLeftSideItems