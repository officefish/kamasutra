import React from "react";
import { HorizontalDotsSVG } from "../../../../layout/layout";
import EditPostDropdown from "./dropdown/EditPostDropdown";
import {withDropdown} from "../../../../decorators/@withDropdown";

@withDropdown
class UserPostHeaderRightSideBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnEnter = this.handleOnEnter.bind(this);
        this.handleOnLeave = this.handleOnLeave.bind(this);

    }

    handleOnEnter() {
        const {toggleDropdown, dropdownKey} = this.props
        toggleDropdown && dropdownKey && toggleDropdown(true, dropdownKey)
    }

    handleOnLeave() {
        const {toggleDropdown, dropdownKey} = this.props
        toggleDropdown && dropdownKey && toggleDropdown(false, dropdownKey)
    }

    render () {
        const {isDropdown} = this.props

        return  <div className='pb-4 relative'
            onMouseEnter={this.handleOnEnter}
            onMouseLeave={this.handleOnLeave}>
            <HorizontalDotsSVG />
            <EditPostDropdown isDropdown={isDropdown} />
        </div>
    }
}
export default UserPostHeaderRightSideBar