import StoreContext from "../../storeContext";
import NewPostContainerIO from "./newpost/NewPostContainerIO";
import PostList from "./PostList"

const Feed = (props) => {
    
    /** List of post datas */
    const posts = props.store.getState().profile.posts
    
    return (
        <div>
            <h3>MyPosts</h3>
            <NewPostContainerIO />
            
        {/*
        
        <StoreContext.Consumer> 
            {
                store => {
                    <PostList store={store} />
                }
            }
            </StoreContext.Consumer>
        */}
        </div>      
    );
}

export default Feed;