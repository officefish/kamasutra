import React from "react";
import {
    StyledOtherButton,
    StyledOtherLabel,
    StyledAdvancedNavigationItem,
    StyledOtherSVG
} from "../../../../layout/layout";
import OtherItemDropdown from "./dropdown/OtherItemDropdown";
import {withDropdown} from "../../../../decorators/@dropdown";

@withDropdown('advancedDropdown')
class OtherItem extends React.Component {

    render () {
        return <StyledAdvancedNavigationItem className='relative'>
            <StyledOtherButton type="button" onClick={this.props.dropdownOn}>
                <StyledOtherLabel>
                    Еще
                </StyledOtherLabel>
                <StyledOtherSVG />
            </StyledOtherButton>
            <OtherItemDropdown />
        </StyledAdvancedNavigationItem>
    }
}
export default OtherItem