import React from "react";
import UserDropdownIcon from "./UserDropdownIcon";
import {StyledConnectItem} from "../../../../layout/layout";
import UserDropdownInfo from "./UserDropdownInfo";

class ConnectItem extends React.Component {

    constructor(props) {
       super(props);
    }

    render () {
        return <StyledConnectItem href='#' >
            <UserDropdownIcon />
            <UserDropdownInfo />
        </StyledConnectItem>
    }
}
export default ConnectItem