import { SendNewMessageAction, UpdateNewMessagePreviewAction } from "../../../redux/messengerReducer";

import {connect} from "react-redux";
import NewMessage from "./NewMessage";


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

const NewMessageContainerIO = connect(mapStateToProps, mapDispatchToProps)(NewMessage)
export default NewMessageContainerIO;