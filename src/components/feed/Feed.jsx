import NewPost from "./newpost/NewPost";
import PostList from "./postList/PostList";

const Feed = () =>
{
    return <div>
                <h3>MyPosts</h3>
                <NewPost />
                <PostList />
           </div>
}
export default Feed;