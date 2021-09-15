import {StyledPostFooterRightSideBar, ViewsSVG} from "../../../../layout/layout";

const FooterRightSideBar = props => {
    const { views } = props

    return <StyledPostFooterRightSideBar>
        <ViewsSVG />
        { views && <span className='ml-1'>{views}</span> }
    </StyledPostFooterRightSideBar>
}
export default FooterRightSideBar