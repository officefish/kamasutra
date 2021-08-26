import style from "./../Post.module.css"
import React from "react";
import connectNewPost from "../../../decorators/connect/@connectNewPost";

@connectNewPost
class NewPost extends React.Component {
    
    constructor (props) {
        super (props)

        /** IO Controllers */
        this.publishController = props.publish
        this.updatePreviewController = props.updatePreview
    }

    /** Publish Button Listener */
    onNewPost = () => { this.publishController() }

    /** Update preview textarea Listener */
    onNewPostPreviewUpdate = (e) => { this.updatePreviewController(e.target.value) }

    render () {
        return (
            <div className={style.NewPost}>
                <div>
                    <textarea onChange={this.onNewPostPreviewUpdate} value={this.props.preview}/>
                </div>
                <div>
                    <button onClick={this.onNewPost}>Add new</button>
                </div>
            </div>
        );
    }
}
export default NewPost;