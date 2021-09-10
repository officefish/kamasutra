/** Reducer which service some user experience  */

const TOGGLE_GLOBAL_PRELOAD = 'TOGGLE_GLOBAL_PRELOAD'

let initialState =
{
    /** Show global preloader while fetching some data or passing connect generation*/
    isGlobalPreloader:false
}

const preloadReducer = (state = initialState, action) => {

    switch (action.type) {
        /** Change document title */
        case TOGGLE_GLOBAL_PRELOAD: {
            return { ...state, isGlobalPreloader:action.isGlobalPreloader }
        }

        default: return state
    }
}
export default preloadReducer

export const ToggleGlobalPreloaderAC = isGlobalPreloader => { return { type:TOGGLE_GLOBAL_PRELOAD, isGlobalPreloader } }
