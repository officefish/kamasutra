import NewPostContainerIO from "./newpost/NewPostContainerIO";
import PostListContainerIO from "./postList/PostListContainerIO";

const Feed = () =>
{
    return <div>
                <h3>MyPosts</h3>
                <NewPostContainerIO />
                <PostListContainerIO />
           </div>
}
export default Feed;