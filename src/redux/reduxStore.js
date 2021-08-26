
import { createStore, combineReducers } from 'redux'

import profileReducer from './profileReducer';
import messengerReducer from './messengerReducer';
import communityReducer from './communityReducer';
import titleReducer from "./titleReducer";
import uxReducer from "./uxReducer";

let reducers = combineReducers ({
    profile:profileReducer,
    messenger:messengerReducer,
    community:communityReducer,
    document:titleReducer,
    ux:uxReducer
})

let store = createStore(reducers)
export default store