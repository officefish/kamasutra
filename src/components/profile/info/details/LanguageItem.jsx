import {
    StyledIntroItemGrid,
    StyledIntroItemLabel,
    StyledIntroItemNavLink,
    StyledIntroCoTwoLiner
} from "../../../../layout/layout";

const LanguageItem = props => {
    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>{props.title}:</StyledIntroItemLabel>
        <StyledIntroCoTwoLiner>
            <StyledIntroItemNavLink to='./profile'>{props.language}</StyledIntroItemNavLink>
        </StyledIntroCoTwoLiner>
    </StyledIntroItemGrid>
}
export default LanguageItem