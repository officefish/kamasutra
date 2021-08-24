import style from "./Messenger.module.css"

import NewMessageContainerIO from "./newMessage/NewMessageContainerIO";
import MessageListContainerIO from "./messageList/MessageListContainerIO";
import DialogListContainerIO from "./dialogList/DialogListContainerIO";

const Messenger = () =>
{
    return  <div className={style.DialogGrid}>
                <DialogListContainerIO/>
                <div>
                    <NewMessageContainerIO />
                    <MessageListContainerIO/>
                </div>
            </div>

}
export default Messenger;