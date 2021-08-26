import {connect} from "react-redux";
import React from "react";

let mapStateToProps = (state) =>
{
    return {
        /** List of messages data */
        data:state.messenger.messages
    }
}

/** Connect Messages list widget with reducer */
const connectMessageList = (props) => (WrappedComponent) =>
{
    class Decorator extends React.Component {
        render() { return <WrappedComponent {...this.props}/> }
    }
    const Connector = connect(mapStateToProps)(Decorator)
    return Connector
}
export default connectMessageList

