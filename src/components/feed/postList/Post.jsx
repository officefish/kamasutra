
const Post = (props) => {
    return (
        <div>
            {props.data}
            <div >like:{props.numLikes}</div>
        </div>
      
    );
}

export default Post;