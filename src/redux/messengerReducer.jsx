export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
export const UPDATE_NEW_MESSAGE_PREVIEW = 'UPDATE_NEW_MESSAGE_PREVIEW'
export const DEFAULT_NEW_MESSAGE_PREVIEW = 'New message ..'


let initialState = 
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

const messengerReducer = (state = initialState, action) => {

    /** Make incomplete copy of state */
    let stateCopy = {...state}

    switch(action.type)
    {
        case SEND_NEW_MESSAGE:
        {
            const id = state.messages.length
            const text = state.newMessagePreview
            const message = {id:id, text:text}
            /** Copy messages and unshift new message */
            stateCopy.messages = [message, ...state.messages];
            stateCopy.newMessagePreview = DEFAULT_NEW_MESSAGE_PREVIEW
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_PREVIEW:
        {
            stateCopy.newMessagePreview = action.text
            return stateCopy
        }
        default: return state
    }
    
}

export const SendNewMessageAction = () => ({type:SEND_NEW_MESSAGE})
export const UpdateNewMessagePreviewAction = (text) => ({type:UPDATE_NEW_MESSAGE_PREVIEW, text:text})

export default messengerReducer