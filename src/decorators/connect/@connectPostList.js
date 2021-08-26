import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        /** List of posts data */
        data:state.profile.posts
    }
}

/** Connect PostList widget with reducer */
const connectPostList = (props) => (WrappedComponent) =>
{
    class Decorator extends React.Component {
        render() { return <WrappedComponent {...this.props}/> }
    }
    const Connector = connect(mapStateToProps)(Decorator)
    return Connector
}
export default connectPostList