import NewPostContainerIO from "./newpost/NewPostContainerIO";
import PostList from "./PostList"

const Feed = (props) => {
    
    /** List of post datas */
    const posts = props.store.getState().profile.posts
    
    return (
        <div>
            <h3>MyPosts</h3>
            <NewPostContainerIO store={props.store}/>
            <PostList data={posts}/>
        </div>      
    );
}

export default Feed;