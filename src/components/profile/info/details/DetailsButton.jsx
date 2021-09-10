import {
    StyledIntroItemGrid,
    StyledIntroCol_2_Liner,
    StyledInfoDetailsBtn,
    StyledIntroCol_1_Liner
} from "../../../../layout/layout";

const DetailsButton = () => {
    return <StyledInfoDetailsBtn>
        <StyledIntroItemGrid>
            <StyledIntroCol_1_Liner />
            <StyledIntroCol_2_Liner>Подробная информация</StyledIntroCol_2_Liner>
        </StyledIntroItemGrid>
    </StyledInfoDetailsBtn>
}
export default DetailsButton