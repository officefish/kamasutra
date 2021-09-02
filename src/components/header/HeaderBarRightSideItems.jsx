import React from "react";
import {UserDropdownParent} from "../../layout/layout";
import UserItem from "./user/UserItem";
import UserDropdown from  "./dropdown/UserDropdown"

class HeaderBarRightSideItems extends React.Component {

    render () {
        return <UserDropdownParent>
           <UserItem />
           <UserDropdown />
        </UserDropdownParent>
    }
}
export default HeaderBarRightSideItems