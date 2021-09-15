import {LikeSVG, StyledPostFooterBtn } from "../../../../layout/layout";

const LikeBtn = props => {
    const { value } = props
    return <StyledPostFooterBtn>
        <LikeSVG />
        { value && <span className='ml-1'>{value}</span> }
    </StyledPostFooterBtn>
}
export default LikeBtn