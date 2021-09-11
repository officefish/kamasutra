import {
    StyledIntroItemGrid,
    StyledIntroItemLabel,
    StyledIntroItemNavLink,
    StyledIntroCol_2_Liner
} from "../../../../layout/layout";

const LanguageItem = props => {
    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>{props.title}:</StyledIntroItemLabel>
        <StyledIntroCol_2_Liner>
            <StyledIntroItemNavLink to='./profile'>{props.language}</StyledIntroItemNavLink>
        </StyledIntroCol_2_Liner>
    </StyledIntroItemGrid>
}
export default LanguageItem