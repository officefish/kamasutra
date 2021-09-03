
import { createStore, combineReducers } from 'redux'

import profileReducer from './connect/profileReducer';
import messengerReducer from './connect/messengerReducer';
import communityReducer from './connect/communityReducer';
import titleReducer from "./ux/titleReducer";
import uxReducer from "./ux/uxReducer";
import dropdownReducer from "./ux/dropdownReducer";

let reducers = combineReducers ({
    profile:profileReducer,
    messenger:messengerReducer,
    community:communityReducer,
    document:titleReducer,
    ux:uxReducer,
    ux2:dropdownReducer
})

let store = createStore(reducers)
export default store