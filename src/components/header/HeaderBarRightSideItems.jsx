import React from "react";
import {StyledRightSideItems} from "../../layout/layout";
import HeaderUserIcon from "./user/HeaderUserIcon";
import HeaderUserName from "./user/HeaderUserName";
import HeaderUserDropdownControl from "./user/HeaderUserDropdownControl";

class HeaderBarRightSideItems extends React.Component {

    render () {
        return <StyledRightSideItems>
            <HeaderUserName />
            <HeaderUserIcon />
            <HeaderUserDropdownControl />
        </StyledRightSideItems>
    }
}
export default HeaderBarRightSideItems