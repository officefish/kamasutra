import {connect} from "react-redux";
import MessageList from "./MessageList";

let mapStateToProps = (state) =>
{
    return {
        /** List of posts data */
        data:state.messenger.messages
    }
}

const MessageListContainerIO = connect(mapStateToProps)(MessageList)
export default MessageListContainerIO;