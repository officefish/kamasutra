import {StyledIntroItemGrid} from "../../../layout/profile/info/intro/styledIntroItemGrid";
import {StyledIntroItemLabel} from "../../../layout/profile/info/intro/styledIntroItemLabel";
import {StyledIntroCol_2_Liner} from "../../../layout/profile/info/intro/styledIntroCol_2_Liner";
import {StyledIntroItemNavLink} from "../../../layout/profile/info/intro/styledIntroItemNavLink";
import {StyledIntroItemSpan} from "../../../layout/layout";

const InfoItem = props => {

    let details;
    if (props.navLink) {
        details = <StyledIntroItemNavLink to={props.navLink}>{props.value}</StyledIntroItemNavLink>;
    } else {
        details = <StyledIntroItemSpan>{props.value}</StyledIntroItemSpan>;
    }

    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>{props.title}:</StyledIntroItemLabel>
        <StyledIntroCol_2_Liner>
            {details}
        </StyledIntroCol_2_Liner>
    </StyledIntroItemGrid>
}
export default InfoItem