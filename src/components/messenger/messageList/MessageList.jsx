import style from "../Messenger.module.css"
import Message from "./Message"

const MessageList = (props) => {
    
    let messages = props.data
        .map( message => <Message text={message.text} id={message.id}/> )
    return <div className={style.MessageList}>{messages}</div>
}

export default MessageList;