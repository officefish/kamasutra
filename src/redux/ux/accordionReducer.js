/** Reducer which service accordions  */

const TOGGLE_ACCORDION = 'TOGGLE_ACCORDION'
const REGISTER_ACCORDION = "REGISTER_ACCORDION"

export const ToggleAccordionAC = key => { return { type:TOGGLE_ACCORDION, key } }
export const RegisterAccordionAC = key => { return {type:REGISTER_ACCORDION, key} }

const accordionReducer = (state = {accordions:[]}, action) => {

    switch (action.type) {

        case REGISTER_ACCORDION:
            const accordion = {key:action.key, isAccordion:false}
            return {
                ...state,
                accordions:[ ...state.accordions, accordion]
            }

        /** Handle ToggleDropdown */
        case TOGGLE_ACCORDION: {

            return {
                ...state,
                accordions:  state.accordions.map( accordion =>
                    {
                        return accordion.key === action.key
                            ? {...accordion, isAccordion: !accordion.isAccordion }
                            : accordion
                    }
                ),

            }
        }
        default: return state
    }
}
export default accordionReducer