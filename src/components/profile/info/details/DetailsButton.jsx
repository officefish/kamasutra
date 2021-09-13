import {
    StyledIntroItemGrid,
    StyledIntroCoTwoLiner,
    StyledInfoDetailsBtn,
    StyledIntroColOneLiner
} from "../../../../layout/layout";

const DetailsButton = props => {
    return <StyledInfoDetailsBtn onClick={props.onClick}>
        <StyledIntroItemGrid>
            <StyledIntroColOneLiner />
            <StyledIntroCoTwoLiner>{props.value}</StyledIntroCoTwoLiner>
        </StyledIntroItemGrid>
    </StyledInfoDetailsBtn>
}
export default DetailsButton