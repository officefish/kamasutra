import {SendNewMessageAction, UpdateNewMessagePreviewAction} from "../../redux/messengerReducer";
import { connect } from "react-redux";
import React from "react";


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
export const connectNewMessage = (props) => (WrappedComponent) =>
{
    class NewMessageDecorator extends React.Component {

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }

    const NewMessageDecoratorConnector = connect(mapStateToProps, mapDispatchToProps)(NewMessageDecorator)
    return NewMessageDecoratorConnector
}
