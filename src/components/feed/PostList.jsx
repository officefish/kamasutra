import Post from "./Post"

const PostList = (props) => {
    let posts = props.data
        .map( post => <Post data={post.data} id={post.id} numLikes={post.numLikes}/> )
    return <div>{posts}</div>
      
}

export default PostList;