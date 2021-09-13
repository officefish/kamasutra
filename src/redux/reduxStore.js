
import { combineReducers } from 'redux'
import { createStore } from 'redux-magic-reducer'

import profileReducer from './connect/profileReducer';
import messengerReducer from './connect/messengerReducer';
import communityReducer from './connect/communityReducer';
import titleReducer from "./ux/titleReducer";
import preloadReducer from "./ux/preloadReducer";
import dropdownReducer from "./ux/dropdownReducer";
import hoverReducer from "./ux/hoverReducer";
import accordionReducer from "./ux/accordionReducer";


const uxReducer = combineReducers({
    preload    :   preloadReducer,
    dropdown   :   dropdownReducer,
    hover      :   hoverReducer,
    accordion  :   accordionReducer
})

const reducers = {
    profile     :   profileReducer,
    messenger   :   messengerReducer,
    community   :   communityReducer,
    document    :   titleReducer,
    ux          :   uxReducer
}

let store = createStore(reducers)
export default store