import React from "react";
import {setTitle} from "../../decorators/@setTitle";
import NewMessage from "./newMessage/NewMessage";
import MessageList from "./messageList/MessageList";
import DialogList from "./dialogList/DialogList";

@setTitle((props) => {
    if(!props.user) return 'Loading messenger...'
    return `${props.user.name}'s Messenger`
})
class Messenger extends React.Component
{
    render () {
        return <div >
            <DialogList />
            <div>
                <NewMessage />
                <MessageList />
            </div>
        </div>
    }

}
export default Messenger;