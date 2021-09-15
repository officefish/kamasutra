import {CommentSVG, StyledPostFooterBtn} from "../../../../layout/layout";

const CommentBtn = props => {
    const { value } = props
    return <StyledPostFooterBtn>
        <CommentSVG />
        { value && <span className='ml-1'>{value}</span> }
    </StyledPostFooterBtn>
}
export default CommentBtn