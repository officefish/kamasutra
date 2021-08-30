import Message from "./Message"
import connectMessageList from "../../../decorators/connect/@connectMessageList";
import React from "react";

@connectMessageList
class MessageList extends React.Component{

    render () {
        let messages = this.props.data
            .map( message => <Message text={message.text} id={message.id} key={message.id}/> )
        return <div >{messages}</div>
    }

}
export default MessageList;