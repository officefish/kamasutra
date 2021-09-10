import {
    StyledIntroItemGrid,
    StyledIntroItemLabel,
    StyledIntroItemNavLink,
    StyledIntroCol_2_Liner
} from "../../../../layout/layout";

const MarriedItem = props => {
    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>Личные отношения:</StyledIntroItemLabel>
        <StyledIntroCol_2_Liner>
            <StyledIntroItemNavLink to='./profile'>{props.isMarried ? 'женат' : 'не женат'}</StyledIntroItemNavLink>
        </StyledIntroCol_2_Liner>
    </StyledIntroItemGrid>
}
export default MarriedItem
