import style from "./../Dialogs.module.css"

const NewMessage = (props) => {
    
    /** Text area value */
    const preview = props.preview

    /** IO Controllers */
    const sendMessageController = props.sendMessage
    const updatePreviewController = props.updatePreview

    /** Send message button Listener */
    const onSendMessage = () => { sendMessageController() }

    /** Ubpdate preview textarea Listener */
    const onNewMessagePreviewUpdate = (e) => { updatePreviewController(e.target.value) }

    return (
        <div className={style.NewMessage}>
            <div>
                <textarea onChange={onNewMessagePreviewUpdate} value={preview}/>
            </div>
            <div>
                <button onClick={onSendMessage}>New message</button>
            </div>
        </div>
    );
}

export default NewMessage;