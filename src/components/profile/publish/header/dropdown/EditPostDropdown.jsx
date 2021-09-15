import {
    DropdownList,
    DropdownListItem,
    DivAbsRgt0
} from "../../../../../layout/layout";
import {NavLink} from "react-router-dom";
import React from "react";
import {dropdownComponent} from "../../../../../decorators/@withDropdown";

@dropdownComponent
class EditPostDropdown extends React.Component {
    render () {
        return <DivAbsRgt0>
            <DropdownList>
                <DropdownListItem>
                    <NavLink to='#'>Редактировать</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Закрепить</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Запретить комментарии</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Отправить в архив</NavLink>
                </DropdownListItem>
                <DropdownListItem>
                    <NavLink to='#' >Выбросить</NavLink>
                </DropdownListItem>
            </DropdownList>
        </DivAbsRgt0>
    }
}
export default EditPostDropdown