import {StyledIntroItemGrid} from "../../../layout/profile/info/intro/styledIntroItemGrid";
import {StyledIntroItemLabel} from "../../../layout/profile/info/intro/styledIntroItemLabel";
import {StyledIntroCol_2_Liner} from "../../../layout/profile/info/intro/styledIntroCol_2_Liner";
import {StyledIntroItemNavLink} from "../../../layout/profile/info/intro/styledIntroItemNavLink";

const InfoItem = props => {
    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>{props.title}:</StyledIntroItemLabel>
        <StyledIntroCol_2_Liner>
            <StyledIntroItemNavLink to={props.navLink}>{props.value}</StyledIntroItemNavLink>
        </StyledIntroCol_2_Liner>
    </StyledIntroItemGrid>
}
export default InfoItem