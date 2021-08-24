import Post from "./Post"
import {connect} from "react-redux";
import PostList from "./PostList";

let mapStateToProps = (state) =>
{
    return {
        /** List of posts data */
        data:state.profile.posts
    }
}

const PostListContainerIO = connect(mapStateToProps)(PostList)
export default PostListContainerIO;