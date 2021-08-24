import Dialog from "./Dialog"
import style from "../Messenger.module.css"

const DialogList = (props) => {

    let dialogs = props.data
        .map( dialog => <Dialog companion={dialog.companion} id={dialog.id}/> )
    return <div className={style.DialogList}>Dialogs:{dialogs}</div>
            
}

export default DialogList;