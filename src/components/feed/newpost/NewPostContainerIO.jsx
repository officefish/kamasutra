import NewPost from "./NewPost"

import { PublishNewPostAction } from "../../../redux/profileReducer";
import { UpdateNewPostPreviewAction } from "../../../redux/profileReducer";
import {connect} from "react-redux";

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

const NewPostContainerIO = connect(mapStateToProps, mapDispatchToProps)(NewPost)
export default NewPostContainerIO;
