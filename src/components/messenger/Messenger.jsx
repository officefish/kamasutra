import style from "./Messenger.module.css"

import MessageListContainerIO from "./messageList/MessageListContainerIO";
import DialogListContainerIO from "./dialogList/DialogListContainerIO";
import React from "react";
import {setTitle} from "../../decorators/@setTitle";
import NewMessage from "./newMessage/NewMessage";

@setTitle((props) => {
    if(!props.user) return 'Loading messenger...'
    return `${props.user.name}'s Messenger`
})
class Messenger extends React.Component
{
    render () {
        return <div className={style.DialogGrid}>
            <DialogListContainerIO/>
            <div>
                <NewMessage />
                <MessageListContainerIO/>
            </div>
        </div>
    }

}
export default Messenger;