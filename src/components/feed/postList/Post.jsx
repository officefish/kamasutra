import style from "../Post.module.css"

const Post = (props) => {
    return (
        <div className={style.Post}>
            {props.data}
            <div className="like">like:{props.numLikes}</div>
        </div>
      
    );
}

export default Post;