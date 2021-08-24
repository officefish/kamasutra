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
    switch(action.type) {
        case SEND_NEW_MESSAGE: {
            const id = state.messages.length
            const text = state.newMessagePreview
            const message = {id:id, text:text}
            state.messages.unshift(message);
            state.newMessagePreview = DEFAULT_NEW_MESSAGE_PREVIEW
            return state
        }
        case UPDATE_NEW_MESSAGE_PREVIEW: {
            state.newMessagePreview = action.text
            return state
        }
        default: return state
    }
    
}

export const SendNewMessageAction = () => ({type:SEND_NEW_MESSAGE})
export const UpdateNewMessagePreviewAction = (text) => ({type:UPDATE_NEW_MESSAGE_PREVIEW, text:text})

export default messengerReducer