/** Reducer which service dropdowns  */

const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'

let initialState =
    {
        dropdowns:[
            { isOpen: false, label: "headerDropdown", children: null }
        ]
    }

const dropdownReducer = (state = initialState, action) => {

    switch (action.type) {
        /** Handle ToggleDropdown */
        case TOGGLE_DROPDOWN: {

            let currentDropdown = state.dropdowns.find(dropdown => dropdown.label === action.label)
            currentDropdown.isOpen = action.isOpen

            return {
                ...state,
                /** Copy dropdowns */
                dropdowns:[...state.dropdowns]
            }

        }

        default: return state
    }
}
export default dropdownReducer

export const ToggleDropdownAC = (isOpen, label) => { return { type:TOGGLE_DROPDOWN, isOpen, label } }