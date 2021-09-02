import React from "react";
import {StyledUserDropdownMessage, StyledUserDropdownName} from "../../../../layout/layout";

class UserDropdownInfo extends React.Component {
    render () {
        return <div>
            <StyledUserDropdownName>Alessandro Fernando Gonzales</StyledUserDropdownName>
            <StyledUserDropdownMessage>Перейти в vk connect</StyledUserDropdownMessage>
        </div>
    }
}

export default UserDropdownInfo