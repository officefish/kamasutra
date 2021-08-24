import NewPost from "./NewPost"

import { PublishNewPostAction } from "../../../redux/profileReducer";
import { UpdateNewPostPreviewAction } from "../../../redux/profileReducer";

const NewPostContainerIO = (props) => {
    
    /** Redux dispatcher */
    const dispatch = props.store.dispatch

    /* Preview text area value */
    const preview = props.store.getState().profile.newPostPreview

    /** IO Controllers */
    const publishController = () => {
    const action = PublishNewPostAction()
    dispatch(action)
    }
    const updatePreviewController = text => {
    const action = UpdateNewPostPreviewAction(text)
    dispatch(action)
    }

    return (<NewPost 
        preview={preview} 
        publish={publishController} 
        updatePreview={updatePreviewController}/>);
}

export default NewPostContainerIO;