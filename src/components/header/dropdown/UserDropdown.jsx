import React from "react";

import {StyledUserDropdown, UserDropdownLiner, UserDropdownSpacer} from "../../../layout/layout";
import ConnectItem from "./connect/ConnectItem";
import SettingsItem from "./settings/SettingsItem";
import HelpItem from "./help/HelpItem";
import LogoutItem from "./logout/LogoutItem";
import {dropdownComponent} from "../../../decorators/@dropdown";

@dropdownComponent('headerDropdown')
class UserDropdown extends React.Component {

    constructor(props) {
        //debugger
        super(props);
        debugger
    }

    render () {

         return <StyledUserDropdown>
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