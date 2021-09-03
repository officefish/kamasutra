import React from "react";

import {StyledUserDropdown, UserDropdownLiner, UserDropdownSpacer} from "../../../layout/layout";
import ConnectItem from "./connect/ConnectItem";
import SettingsItem from "./settings/SettingsItem";
import HelpItem from "./help/HelpItem";
import LogoutItem from "./logout/LogoutItem";
import {dropdownComponent} from "../../../decorators/@dropdown";

/** Reference to dropdown absolute container*/
const dropdownRootRef = React.createRef()

@dropdownComponent('headerDropdown', dropdownRootRef)
class UserDropdown extends React.Component {

    render () {
        return  <StyledUserDropdown ref={dropdownRootRef}>
                        <UserDropdownLiner>
                            <ConnectItem/>
                            <UserDropdownSpacer/>
                            <SettingsItem/>
                            <HelpItem/>
                            <UserDropdownSpacer/>
                            <LogoutItem/>
                        </UserDropdownLiner>
                    </StyledUserDropdown>
    }
}
export default UserDropdown