import {SendNewMessageAction, UpdateNewMessagePreviewAction} from "../../redux/connect/messengerReducer";
import ConnectDecoratorFactory from "./ConnectDecoratorFactory";

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

/** Connect newMessage widget with reducer */
const connectNewMessage = ConnectDecoratorFactory.MakeDecorator(mapStateToProps, mapDispatchToProps)
export default connectNewMessage