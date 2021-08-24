import { SendNewMessageAction, UpdateNewMessagePreviewAction } from "../../../redux/messengerReducer";
import NewMessage from "./NewMessage";
import {PublishNewPostAction, UpdateNewPostPreviewAction} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPost from "../../feed/newpost/NewPost";

/*const NewMessageContainerIO = (props) => {

     /!** Redux dispatcher *!/
     const dispatch = props.store.dispatch

     /!* Preview text area value *!/
     const preview = props.store.getState().messenger.newMessagePreview

     /!** IO Controllers *!/
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
}*/

let mapStateToProps = (state) =>
{
    return {
        /** Preview text area value */
        preview:state.messenger.newMessagePreview
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Send new message Controller */
        sendMessage: () =>
        {
            const action = SendNewMessageAction()
            dispatch(action)
        },
        /** New message preview Controller */
        updatePreview: (text) =>
        {
            const action = UpdateNewMessagePreviewAction(text)
            dispatch(action)
        }
    }
}

const NewMessageContainerIO = connect(mapStateToProps, mapDispatchToProps)(NewPost)
export default NewMessageContainerIO;