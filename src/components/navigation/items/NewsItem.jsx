import React from "react";
import {NavigationListItem} from "../../../layout/navigation/navigationListItem";
import {NavLink} from "react-router-dom";
import {NavigationItemLiner} from "../../../layout/navigation/navigationItemLiner";
import {NewsNavigationSVG} from "../../../layout/navigation/icon/NewsNavigationSVG";
import {NavigationItemLabel} from "../../../layout/navigation/navigationItemLabel";
import withHover from "../../../decorators/@withHover";


@withHover
class NewsItem extends React.Component {

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
            <NavLink to="/#">
                <NavigationItemLiner>
                    <NewsNavigationSVG $hover={this.props.isHover}/>
                    <NavigationItemLabel $hover={this.props.isHover}>
                        Новости
                    </NavigationItemLabel>
                </NavigationItemLiner>
            </NavLink>
        </NavigationListItem>
    }
}
export default NewsItem