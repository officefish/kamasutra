
import profileReducer from './profileReducer';
import messengerReducer from './messengerReducer';

import { createStore, combineReducers } from 'redux'

let reducers = combineReducers ({
    profile:profileReducer,
    messenger:messengerReducer
})

let store = createStore(reducers)
export default store;