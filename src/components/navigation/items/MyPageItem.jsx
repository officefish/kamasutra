import React from "react";
import {NavLink} from "react-router-dom";
import {
    NavigationItemLiner,
    NavigationItemLabel,
    NavigationListItem,
    ProfileNavigationSVG
} from "../../../layout/layout";
import withHover from "../../../decorators/@withHover";

@withHover
class MyPageItem extends React.Component {

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
           <NavLink to="/profile">
               <NavigationItemLiner>
                   <ProfileNavigationSVG $hover={this.props.isHover}/>
                   <NavigationItemLabel $hover={this.props.isHover}>
                       Моя страница
                   </NavigationItemLabel>
               </NavigationItemLiner>
           </NavLink>
       </NavigationListItem>
   }
}
export default MyPageItem