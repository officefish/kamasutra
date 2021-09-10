import React from "react";
import {NavLink} from "react-router-dom";
import {
    NavigationItemLiner,
    NavigationItemLabel,
    NavigationListItem,
    NavigationAttentionLiner,
    MessengerNavigationSVG
} from "./../../../layout/layout";
import withHover from "../../../decorators/@withHover";

@withHover
class MessengerItem extends React.Component {

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
            <NavLink to="/messenger">
                <NavigationItemLiner>
                    <MessengerNavigationSVG $hover={this.props.isHover}/>
                    <NavigationItemLabel $hover={this.props.isHover}>
                        Сообщения
                    </NavigationItemLabel>
                    <NavigationAttentionLiner $hover={this.props.isHover}>2</NavigationAttentionLiner>
                </NavigationItemLiner>
            </NavLink>
        </NavigationListItem>
    }
}
export default MessengerItem