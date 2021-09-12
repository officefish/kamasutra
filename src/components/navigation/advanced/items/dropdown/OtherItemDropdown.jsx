import React from "react";
import {NavLink} from "react-router-dom";
import {
    StyledAdvancedDropdownLiner,
    StyledAdvancedDropdownList,
    StyledAdvancedDropdownListItem, StyledCornerDetail
} from "../../../../../layout/layout";
import {dropdownComponentWithOutsideHandler} from "../../../../../decorators/@withDropdown";

/** Reference to dropdown absolute container*/
const dropdownRootRef = React.createRef()

@dropdownComponentWithOutsideHandler (dropdownRootRef)
class OtherItemDropdown extends React.Component {
    render () {
        return  <StyledAdvancedDropdownLiner ref={dropdownRootRef}>
            <StyledAdvancedDropdownList>
                <StyledAdvancedDropdownListItem>
                    <NavLink to='#'>О вконтакте</NavLink>
                </StyledAdvancedDropdownListItem>
                <StyledAdvancedDropdownListItem>
                    <NavLink to='#' >Вакансии</NavLink>
                </StyledAdvancedDropdownListItem>
                <StyledAdvancedDropdownListItem>
                    <NavLink to='#' >Правовая информация</NavLink>
                </StyledAdvancedDropdownListItem>
                <StyledAdvancedDropdownListItem>
                    <NavLink to='#' >Защита данных</NavLink>
                </StyledAdvancedDropdownListItem>
            </StyledAdvancedDropdownList>
            <StyledCornerDetail />
        </StyledAdvancedDropdownLiner>
    }
}
export default OtherItemDropdown