import style from "./Dialogs.module.css" 

import MessageList from "./MessageList";
import DialogList from "./DialogList";
import NewMessageContainerIO from "./newMessage/NewMessageContainerIO";

const Messenger = (props) => {

    /** Messenger state data */
    const messenger = props.store.getState().messenger

    return (
        <div className={style.DialogGrid}>
            <DialogList data={messenger.dialogs} />
            <div>
                <NewMessageContainerIO store={props.store}/>
                <MessageList data={messenger.messages}/>
            </div>
        </div>
    );
}

export default Messenger;