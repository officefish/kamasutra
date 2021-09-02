import React from "react";

import {StyledUserDropdown, UserDropdownLiner} from "../../../layout/layout";
import ConnectItem from "./connect/ConnectItem";

class UserDropdown extends React.Component {
    render () {
        return <StyledUserDropdown>
            <UserDropdownLiner>
                <ConnectItem />
            </UserDropdownLiner>
        </StyledUserDropdown>
    }
}
export default UserDropdown