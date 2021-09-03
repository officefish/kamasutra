/** SetTitle reducer */
const SET_TITLE = 'SET_TITLE'

let initialState =
    {
        /** Document title */
        title:'kamasutra'
    }

const titleReducer = (state = initialState, action) => {

    switch (action.type) {
        /** Change document title */
        case SET_TITLE: {
            return { ...state, title:state.title }
        }

        default: return state
    }
}
export default titleReducer

export const SetTitleAC = title => { return { type:SET_TITLE, title } }

