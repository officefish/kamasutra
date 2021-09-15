import {RepostSVG, StyledPostFooterBtn} from "../../../../layout/layout";

const RepostBtn = props => {
    const { value } = props
    return <StyledPostFooterBtn>
        <RepostSVG />
        { value && <span className='ml-1'>{value}</span> }
    </StyledPostFooterBtn>
}
export default RepostBtn