import {
    StyledPostFooterLiner
} from "../../../../layout/layout";

import FooterLeftSideBar from "./FooterLeftSideBar";
import FooterRightSideBar from "./FooterRightSideBar";

const UserPostFooter = props => {

    const {likes, comments, reposts, views} = props

    return <StyledPostFooterLiner>
        <FooterLeftSideBar likes={likes} comments={comments} reposts={reposts} />
        <FooterRightSideBar views={views} />
    </StyledPostFooterLiner>
}
export default UserPostFooter