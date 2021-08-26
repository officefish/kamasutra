import Post from "./Post"
import React from "react";
import connectPostList from "../../../decorators/connect/@connectPostList";

@connectPostList
class PostList extends React.Component
{
    render () {
        let posts = this.props.data
            .map( post => <Post data={post.data} id={post.id} key={post.id} numLikes={post.numLikes}/> )
        return <div>{posts}</div>
    }

}
export default PostList