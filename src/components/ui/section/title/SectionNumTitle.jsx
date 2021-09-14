import {
    StyledSectionTitleLiner,
    StyledSectionTitleNavLink,
    StyledSectionTitleNumsSpan
} from "../../../../layout/layout";

const SectionNumsTitle = props => {
    const {title, numsValue, navLink} = props
    return <StyledSectionTitleLiner>
        <StyledSectionTitleNavLink to={navLink}>
            {title}:<StyledSectionTitleNumsSpan>{numsValue}</StyledSectionTitleNumsSpan>
        </StyledSectionTitleNavLink>
    </StyledSectionTitleLiner>
}
export default SectionNumsTitle