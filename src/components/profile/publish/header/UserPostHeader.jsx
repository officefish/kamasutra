import React from "react";
import {
    StyledPostHeaderLiner
} from "../../../../layout/layout";
import UserPostHeaderLeftSideBar from "./UserPostHeaderLeftSideBar";
import UserPostHeaderRightSideBar from "./UserPostHeaderRightSideBar";

class UserPostHeader extends React.Component {

    render() {

        const headerProps = {}

        headerProps.userName = this.props.userName
        headerProps.date = this.props.date
        headerProps.userNavLink = this.props.userNavLink
        headerProps.dateNavLink = this.props.dateNavLink

        return <StyledPostHeaderLiner>
            <UserPostHeaderLeftSideBar {...headerProps} />
            <UserPostHeaderRightSideBar />
        </StyledPostHeaderLiner>
    }
}
export default UserPostHeader