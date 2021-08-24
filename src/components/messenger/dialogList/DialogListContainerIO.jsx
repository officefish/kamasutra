import {connect} from "react-redux";
import DialogList from "./DialogList";

let mapStateToProps = (state) =>
{
    return {
        /** List of posts data */
        data:state.messenger.dialogs
    }
}

const DialogListContainerIO = connect(mapStateToProps)(DialogList)
export default DialogListContainerIO;