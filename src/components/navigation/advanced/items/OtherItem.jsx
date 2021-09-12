import React from "react";
import {
    StyledOtherButton,
    StyledOtherLabel,
    StyledAdvancedNavigationItem,
    StyledOtherSVG
} from "../../../../layout/layout";
import OtherItemDropdown from "./dropdown/OtherItemDropdown";
import {withDropdown} from "../../../../decorators/@withDropdown";

@withDropdown
class OtherItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const {toggleDropdown, dropdownKey} = this.props
        toggleDropdown && dropdownKey && toggleDropdown(true, dropdownKey)
    }

    render () {
        const {dropdownKey} = this.props

        return <StyledAdvancedNavigationItem className='relative'>
            <StyledOtherButton type="button" onClick={this.handleOnClick}>
                <StyledOtherLabel>
                    Еще
                </StyledOtherLabel>
                <StyledOtherSVG />
            </StyledOtherButton>
            <OtherItemDropdown dropdownKey={dropdownKey}/>
        </StyledAdvancedNavigationItem>
    }
}
export default OtherItem