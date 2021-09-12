import React from "react";
import {dropdownComponent} from "../../../../decorators/@withDropdown";
import {StyledEditDetailsSectionNavLink} from "../../../../layout/profile/info/details/styledEditDetailsSectionNavLink";
import {StyledEditDetailsSectionBtn} from "../../../../layout/profile/info/details/styledEditDetailsSectionBtn";

@dropdownComponent
class EditSectionBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        //debugger
        return <StyledEditDetailsSectionBtn >
            <StyledEditDetailsSectionNavLink to={this.props.navLink}>Корректировать</StyledEditDetailsSectionNavLink>
        </StyledEditDetailsSectionBtn>
    }
}
export default EditSectionBtn

