import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        /** List of dialogs data */
        data:state.messenger.dialogs
    }
}

/** Connect newMessage widget with reducer */
const connectDialogList = (props) => (WrappedComponent) =>
{
    class Decorator extends React.Component {
        render() { return <WrappedComponent {...this.props}/> }
    }
    const Connector = connect(mapStateToProps)(Decorator)
    return Connector
}
export default connectDialogList