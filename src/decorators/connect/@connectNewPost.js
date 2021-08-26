import {PublishNewPostAction, UpdateNewPostPreviewAction} from "../../redux/profileReducer";
import ConnectDecoratorFactory from "./ConnectDecoratorFactory";

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
const connectNewPost = ConnectDecoratorFactory.MakeDecorator(mapStateToProps, mapDispatchToProps)
export default connectNewPost
