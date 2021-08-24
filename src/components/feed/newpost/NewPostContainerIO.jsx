import NewPost from "./NewPost"

import { PublishNewPostAction } from "../../../redux/profileReducer";
import { UpdateNewPostPreviewAction } from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";

const NewPostContainerIO = () => {
    /** Redux dispatcher */
    //const dispatch = store.dispatch

    /* Preview text area value */
    const preview = {} // store.getState().profile.newPostPreview

    /** IO Controllers */
    const publishController = () => {
        const action = PublishNewPostAction()
        //dispatch(action)
    }
            
    const updatePreviewController = text => {
        const action = UpdateNewPostPreviewAction(text)
        //dispatch(action)
    }
        
    return <StoreContext.Consumer> 
        {   (store) => {
                return <NewPost 
                    preview={store.getState().profile.newPostPreview} 
                    publish={publishController} 
                    updatePreview={updatePreviewController}/>    
                }
        }
        </StoreContext.Consumer>    

}
export default NewPostContainerIO;