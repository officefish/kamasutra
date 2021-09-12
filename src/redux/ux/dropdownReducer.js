/** Reducer which service dropdowns  */
const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
const REGISTER_DROPDOWN = "REGISTER_HOVER"

export const ToggleDropdownAC = (isDropdown, key) => { return { type:TOGGLE_DROPDOWN, isDropdown, key } }
export const RegisterDropdownAC = key => { return {type:REGISTER_DROPDOWN, key} }

const dropdownReducer = (state = {dropdowns:[]}, action) => {

    switch (action.type) {

        case REGISTER_DROPDOWN:
            const dropdown = {key:action.key, isDropdown:false}
            return {
                ...state,
                dropdowns:[ ...state.dropdowns, dropdown]
            }

        /** Handle ToggleDropdown */
        case TOGGLE_DROPDOWN: {

            return {
                ...state,
                dropdowns:  state.dropdowns.map( dropdown =>
                    {
                        return dropdown.key === action.key
                            ? {...dropdown, isDropdown:action.isDropdown }
                            : dropdown
                    }
                ),

            }
        }
        default: return state
    }
}
export default dropdownReducer

