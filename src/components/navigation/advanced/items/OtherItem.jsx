import {
    StyledOtherButton,
    StyledOtherLabel,
    StyledAdvancedNavigationItem,
    StyledOtherSVG
} from "../../../../layout/layout";

const OtherItem = () =>  <StyledAdvancedNavigationItem>
    <StyledOtherButton type="button" >
        <StyledOtherLabel>
            Еще
        </StyledOtherLabel>
        <StyledOtherSVG />
    </StyledOtherButton>
</StyledAdvancedNavigationItem>
export default OtherItem