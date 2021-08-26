import {PublishNewPostAction, UpdateNewPostPreviewAction} from "../../redux/profileReducer";
import {connect} from "react-redux";
import React from "react";

let mapStateToProps = (state) =>
{
    return {
        /** Preview text area value */
        preview:state.profile.newPostPreview
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Publish new post Controller */
        publish: () =>
        {
            const action = PublishNewPostAction()
            dispatch(action)
        },
        /** Publish preview Controller */
        updatePreview: (text) =>
        {
            const action = UpdateNewPostPreviewAction(text)
            dispatch(action)
        }
    }
}

/** Connect NewPost widget with reducer */
const connectNewPost = (props) => (WrappedComponent) =>
{
    class Decorator extends React.Component {
        render() { return <WrappedComponent {...this.props}/> }
    }
    const Connector = connect(mapStateToProps, mapDispatchToProps)(Decorator)
    return Connector
}
export default connectNewPost
