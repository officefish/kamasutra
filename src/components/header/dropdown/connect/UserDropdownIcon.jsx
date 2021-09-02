import React from "react";
import {HeaderUserIconImg, UserDropdownIconLiner} from "../../../../layout/layout";

class UserDropdownIcon extends React.Component {

    render () {
        return <UserDropdownIconLiner>
            <HeaderUserIconImg
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
            />
        </UserDropdownIconLiner>

    }
}
export default UserDropdownIcon