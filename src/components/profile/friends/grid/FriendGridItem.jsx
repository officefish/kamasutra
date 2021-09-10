import React from "react";
import {FriendsGridItemImg, FriendsGridItemLiner, FriendsGridItemLabel} from "../../../../layout/layout";
import {NavLink} from "react-router-dom";
import withHover from "../../../../decorators/@withHover";

@withHover
class FriendGridItem extends React.Component {

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
        return <NavLink to='/profile'>
        <FriendsGridItemLiner
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
        >
                <FriendsGridItemImg
                    src={this.props.src}
                    alt={this.props.name}/>
            <FriendsGridItemLabel $hover={this.props.isHover}>
                {this.props.name}
            </FriendsGridItemLabel>
        </FriendsGridItemLiner>
        </NavLink>
    }
}
export default FriendGridItem