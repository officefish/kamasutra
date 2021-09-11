import {
    StyledIntroItemGrid,
    StyledIntroCoTwoLiner,
    StyledInfoDetailsBtn,
    StyledIntroColOneLiner
} from "../../../../layout/layout";

const DetailsButton = () => {
    return <StyledInfoDetailsBtn>
        <StyledIntroItemGrid>
            <StyledIntroColOneLiner />
            <StyledIntroCoTwoLiner>Подробная информация</StyledIntroCoTwoLiner>
        </StyledIntroItemGrid>
    </StyledInfoDetailsBtn>
}
export default DetailsButton