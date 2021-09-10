export const TOGGLE_HOVER = 'TOGGLE_HOVER'
export const REGISTER_HOVER = "REGISTER_HOVER"

export const ToggleHoverAC = (isHover, key) => { return { type:TOGGLE_HOVER, isHover, key } }
export const RegisterHoverAC = (key) => { return { type:REGISTER_HOVER, key } }

const hoverReducer = (state = {hovers:[]}, action) => {
    switch(action.type) {

        case REGISTER_HOVER:
            const hover = {key:action.key, isHover:false}
            /** return copy of state using spread operator*/
            return {
                ...state,
                hovers:[ ...state.hovers, hover]
                /** Copy messages and unshift new message */
            }

        case TOGGLE_HOVER:
            return {
                ...state,
                hovers:  state.hovers.map( hover =>
                    {
                        return hover.key === action.key
                            ? {...hover, isHover:action.isHover }
                            : hover
                    }
                ),

            }

         default:
             return state;
    }
}
export default hoverReducer