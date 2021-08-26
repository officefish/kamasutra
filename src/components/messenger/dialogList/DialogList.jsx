import Dialog from "./Dialog"
import style from "../Messenger.module.css"
import React from "react";
import connectDialogList from "../../../decorators/connect/@connectDialogList";

@connectDialogList
class DialogList extends React.Component {

    render () {
        let dialogs = this.props.data
            .map( dialog => <Dialog companion={dialog.companion} id={dialog.id}/> )
        return <div className={style.DialogList}>Dialogs:{dialogs}</div>
    }
}
export default DialogList;