import {StyledIntroItemGrid} from "../../../layout/profile/info/intro/styledIntroItemGrid";
import {StyledIntroItemLabel} from "../../../layout/profile/info/intro/styledIntroItemLabel";
import {StyledIntroCoTwoLiner} from "../../../layout/profile/info/intro/styledIntroCoTwoLiner";
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
        <StyledIntroCoTwoLiner>
            {details}
        </StyledIntroCoTwoLiner>
    </StyledIntroItemGrid>
}
export default InfoItem