import {
    StyledIntroItemGrid,
    StyledIntroItemLabel,
    StyledIntroItemNavLink,
    StyledIntroCol_2_Liner
} from "../../../../layout/layout";

const CityItem = props => {
    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>Город:</StyledIntroItemLabel>
        <StyledIntroCol_2_Liner>
            <StyledIntroItemNavLink to='./profile'>{props.city}</StyledIntroItemNavLink>
        </StyledIntroCol_2_Liner>
    </StyledIntroItemGrid>
}
export default CityItem