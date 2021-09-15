import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import RepostBtn from "./RepostBtn";
import {DivFlxItmCnt} from "../../../../layout/layout";

const FooterLeftSideBar = props => {
    const {likes, comments, reposts} = props
    return <DivFlxItmCnt>
        <LikeBtn value={likes} />
        <CommentBtn value={comments} />
        <RepostBtn value={reposts}/>
    </DivFlxItmCnt>
}
export default FooterLeftSideBar