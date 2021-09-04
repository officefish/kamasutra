import React from "react";
import {
    HeaderNotificationAttentionLiner,
    NotificationHeaderControlsLiner,
    StyledNotificationSVG
} from "../../../layout/layout";

class NotificationItem extends React.Component {
    render () {
        return <NotificationHeaderControlsLiner>
            <StyledNotificationSVG />
            <HeaderNotificationAttentionLiner>
                1
            </HeaderNotificationAttentionLiner>
        </NotificationHeaderControlsLiner>
    }
}
export default NotificationItem