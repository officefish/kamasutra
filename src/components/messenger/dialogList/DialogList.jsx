import Dialog from "./Dialog"
import React from "react";
import connectDialogList from "../../../decorators/connect/@connectDialogList";

@connectDialogList
class DialogList extends React.Component {

    render () {
        let dialogs = this.props.data
            .map( dialog => <Dialog
                companion={dialog.companion}
                id={dialog.id}
                key={dialog.id}
            /> )
        return <div >Dialogs:{dialogs}</div>
    }
}
export default DialogList;