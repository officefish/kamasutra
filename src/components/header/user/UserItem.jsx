import React from "react";

import HeaderUserName from "./HeaderUserName";
import HeaderUserIcon from "./HeaderUserIcon";
import HeaderUserDropdownControl from "./HeaderUserDropdownControl";
import {StyledRightSideItems} from "../../../layout/header/styledRightSideItems";
import {withDropdown} from "../../../decorators/@dropdown";

@withDropdown('headerDropdown')
class UserItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return <StyledRightSideItems onClick={this.props.dropdownOn}>
            <HeaderUserName />
            <HeaderUserIcon />
            <HeaderUserDropdownControl />
        </StyledRightSideItems>
    }

}
export default UserItem