import style from "../Messenger.module.css"
import React from "react";
import {connectNewMessage} from "../../../decorators/connect/@connectNewMessage";

@connectNewMessage()
class NewMessage extends React.Component {

    constructor(props) {
        super(props);

        /** IO Controllers */
        this.sendMessageController = props.sendMessage
        this.updatePreviewController = props.updatePreview
        debugger
    }

    /** Send message button Listener */
    onSendMessage = () => { this.sendMessageController() }

    /** Update preview textarea Listener */
    onNewMessagePreviewUpdate = (e) => { this.updatePreviewController(e.target.value) }

    render () {
        return (
            <div className={style.NewMessage}>
                <div>
                    <textarea onChange={this.onNewMessagePreviewUpdate} value={this.props.preview}/>
                </div>
                <div>
                    <button onClick={this.onSendMessage}>New message</button>
                </div>
            </div>
        );
    }
}
export default NewMessage;