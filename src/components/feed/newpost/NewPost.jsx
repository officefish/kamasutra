import style from "./../Post.module.css"

const NewPost = (props) => {
    
    /** Text area value */
    const preview = props.preview

    /** IO Controllers */
    const publishController = props.publish
    const updatePreviewController = props.updatePreview

    /** Publish Button Listener */
    const onNewPost = () => { publishController() }

    /** Ubpdate preview textarea Listener */
    const onNewPostPreviewUpdate = (e) => { updatePreviewController(e.target.value) }

    return (
        <div className={style.NewPost}>
            <div>
                <textarea onChange={onNewPostPreviewUpdate} value={preview}/>
            </div>
            <div>
                <button onClick={onNewPost}>Add new</button>
            </div>
        </div>
    );
}

export default NewPost;