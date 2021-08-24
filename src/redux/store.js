import MessengerReducer, { DEFAULT_NEW_MESSAGE_PREVIEW } from "./messengerReducer"
import ProfileReducer, { DEFAULT_NEW_POST_PREVIEW } from "./profileReducer"

/** Store declaration */
class Store {

  /** UI Statement Model */
  static _state = {}
  static GetState() { return Store._state }
  
  /** OnStateChange broadcaster */
  static _OnStateChangeDelegate
  /** OnStateChange register listener function */
  static Subscribe

  // Action Dispatcher
  static Dispatch
  
}

/** Store definition */
Store.Dispatch = (action) => {
  Store._state.profile = ProfileReducer(Store._state.profile, action)
  Store._state.messenger = MessengerReducer(Store._state.messenger, action)

  Store._OnStateChangeDelegate.broadcast(Store._state)
}

Store._OnStateChangeDelegate = {
  broadcast: state => { alert('should be override') }
}

Store.Subscribe = observer => {
  Store._OnStateChangeDelegate.broadcast = observer
}

/** UI Initial Statement Model */
Store._state = {
  profile:
  {
    posts:[
      {id : 3, data:"Post N", numLikes:3},
      {id : 2, data:"Post 1", numLikes:6},
      {id : 1, data:"Post 0", numLikes:3},
      {id : 0, data:"Initial Post", numLikes:9}
    ],
    newPostPreview: DEFAULT_NEW_POST_PREVIEW
  } , 
  messenger: 
  { 
    dialogs:
    [
      {id : 3, companion:"Sergey"},
      {id : 2, companion:"Dmitriy"},
      {id : 1, companion:"Roman"},
      {id : 0, companion:"Nikita"}
    ],
    messages :
    [
      {id : 3, text:"React is cool"},
      {id : 2, text:"I love you"},
      {id : 1, text:"Nice to meet you"},
      {id : 0, text:"Hello world"}
    ],
    newMessagePreview: DEFAULT_NEW_MESSAGE_PREVIEW
  }  
}

export default Store;