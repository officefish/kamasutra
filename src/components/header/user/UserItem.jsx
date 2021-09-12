import React from "react";

import HeaderUserName from "./HeaderUserName";
import HeaderUserIcon from "./HeaderUserIcon";
import HeaderUserDropdownControl from "./HeaderUserDropdownControl";
import {StyledRightSideItems} from "../../../layout/header/styledRightSideItems";
import {withDropdown} from "../../../decorators/@withDropdown";
import UserDropdown from "../dropdown/UserDropdown";
import {UserDropdownParent} from "../../../layout/header/dropdown/userDropdownParent";

@withDropdown
class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const {toggleDropdown, dropdownKey} = this.props
        toggleDropdown && dropdownKey && toggleDropdown(true, dropdownKey)
    }

    render () {
        const {dropdownKey} = this.props

        return <UserDropdownParent>
            <StyledRightSideItems onClick={this.handleOnClick}>
                <HeaderUserName />
                <HeaderUserIcon />
                <HeaderUserDropdownControl />
            </StyledRightSideItems>
            <UserDropdown dropdownKey={dropdownKey} />
        </UserDropdownParent>
    }
}
export default UserItem