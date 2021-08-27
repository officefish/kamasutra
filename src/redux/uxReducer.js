/** Reducer which service some user experience  */

const TOGGLE_GLOBAL_PRELOAD = 'TOGGLE_GLOBAL_PRELOAD'

let initialState =
{
    /** Show global preloader while fetching some data or passing content generation*/
    isGlobalPreloader:false
}

const uxReducer = (state = initialState, action) => {

    switch (action.type) {
        /** Change document title */
        case TOGGLE_GLOBAL_PRELOAD: {
            return { ...state, isGlobalPreloader:action.isGlobalPreloader }
        }

        default: return state
    }
}
export default uxReducer

export const ToggleGlobalPreloaderAC = isGlobalPreloader => { return { type:TOGGLE_GLOBAL_PRELOAD, isGlobalPreloader } }
