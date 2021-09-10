import {NavLink} from "react-router-dom";
import {
    NavigationListItem,
    NavigationItemLiner,
    CommunityNavigationSVG,
    NavigationItemLabel
} from "../../../layout/layout";

import React from "react";
import withHover from "../../../decorators/@withHover";

@withHover
class CommunityItem extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
    }

    onMouseEnterHandler () {
        const {toggleHover} = this.props
        toggleHover && toggleHover(true)
    }

    onMouseLeaveHandler () {
        const {toggleHover} = this.props
        toggleHover && toggleHover(false)
    }

    render() {
        return <NavigationListItem
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
        >
            <NavLink to="/community">
                <NavigationItemLiner>
                    <CommunityNavigationSVG $hover={this.props.isHover}/>
                    <NavigationItemLabel $hover={this.props.isHover}>
                        Сообщество
                    </NavigationItemLabel>
                </NavigationItemLiner>
            </NavLink>
        </NavigationListItem>
    }
}
export default CommunityItem