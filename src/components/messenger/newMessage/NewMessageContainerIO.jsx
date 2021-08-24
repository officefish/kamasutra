import { SendNewMessageAction, UpdateNewMessagePreviewAction } from "../../../redux/messengerReducer";
import NewMessage from "./NewMessage";

const NewMessageContainerIO = (props) => {

     /** Redux dispatcher */
     const dispatch = props.store.dispatch

     /* Preview text area value */
     const preview = props.store.getState().messenger.newMessagePreview

     /** IO Controllers */
    const sendMessageController = () => {
        const action = SendNewMessageAction()
        dispatch(action)
    }
    
    const updatePreviewController = text => {
        const action = UpdateNewMessagePreviewAction(text)
        dispatch(action)
    }

    return (<NewMessage
        preview={preview}
        sendMessage={sendMessageController}
        updatePreview={updatePreviewController}
    />);
}

export default NewMessageContainerIO;