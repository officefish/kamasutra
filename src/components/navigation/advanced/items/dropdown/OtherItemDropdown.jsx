import React from "react";
import {NavLink} from "react-router-dom";
import {
    StyledAdvancedDropdownLiner,
    DropdownList,
    DropdownListItem
} from "../../../../../layout/layout";
import {dropdownComponentWithOutsideHandler} from "../../../../../decorators/@withDropdown";

/** Reference to dropdown absolute container*/
const dropdownRootRef = React.createRef()

@dropdownComponentWithOutsideHandler (dropdownRootRef)
class OtherItemDropdown extends React.Component {
    render () {
        return  <StyledAdvancedDropdownLiner ref={dropdownRootRef}>
            <DropdownList>
                <DropdownListItem>
                    <NavLink to='#'>О вконтакте</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Вакансии</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Правовая информация</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Защита данных</NavLink>
                </DropdownListItem>
            </DropdownList>
        </StyledAdvancedDropdownLiner>
    }
}
export default OtherItemDropdown