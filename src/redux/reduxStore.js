
import { createStore, combineReducers } from 'redux'

import profileReducer from './profileReducer';
import messengerReducer from './messengerReducer';
import communityReducer from './communityReducer';
import titleReducer from "./@setTitle";

let reducers = combineReducers ({
    profile:profileReducer,
    messenger:messengerReducer,
    community:communityReducer,
    document:titleReducer
})

let store = createStore(reducers)
export default store;