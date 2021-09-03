import React from "react";

import {StyledUserDropdown, UserDropdownLiner, UserDropdownSpacer} from "../../../layout/layout";
import ConnectItem from "./connect/ConnectItem";
import SettingsItem from "./settings/SettingsItem";
import HelpItem from "./help/HelpItem";
import LogoutItem from "./logout/LogoutItem";
import {dropdownComponent} from "../../../decorators/@dropdown";

const ref = React.createRef()

@dropdownComponent('headerDropdown', ref)
class UserDropdown extends React.Component {

    constructor(props) {
        //debugger
        super(props);

    }

    render () {
        return  <StyledUserDropdown ref={ref}>
                        <UserDropdownLiner>
                            <ConnectItem/>
                            <UserDropdownSpacer/>
                            <SettingsItem/>
                            <HelpItem/>
                            <UserDropdownSpacer/>
                            <LogoutItem/>
                        </UserDropdownLiner>
                    </StyledUserDropdown>


         // return <StyledUserDropdown>
         //        <UserDropdownLiner>
         //            <ConnectItem/>
         //            <UserDropdownSpacer/>
         //            <SettingsItem/>
         //            <HelpItem/>
         //            <UserDropdownSpacer/>
         //            <LogoutItem/>
         //        </UserDropdownLiner>
         //    </StyledUserDropdown>


    }
}
export default UserDropdown