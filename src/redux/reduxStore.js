
import { createStore, combineReducers } from 'redux'

import profileReducer from './profileReducer';
import messengerReducer from './messengerReducer';
import communityReducer from './communityReducer';

let reducers = combineReducers ({
    profile:profileReducer,
    messenger:messengerReducer,
    community:communityReducer
})

let store = createStore(reducers)
export default store;