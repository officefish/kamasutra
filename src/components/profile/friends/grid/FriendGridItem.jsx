import React from "react";
import {FriendsGridItemImg, FriendsGridItemLiner, FriendsGridItemLabel} from "../../../../layout/layout";
import {NavLink} from "react-router-dom";

class FriendGridItem extends React.Component {

    render() {
        return <NavLink to='/profile'>
        <FriendsGridItemLiner>
                <FriendsGridItemImg
                    src={this.props.src}
                    alt={this.props.name}/>
            <FriendsGridItemLabel>
                {this.props.name}
            </FriendsGridItemLabel>
        </FriendsGridItemLiner>
        </NavLink>
    }
}
export default FriendGridItem