import {
    StyledIntroItemGrid,
    StyledIntroItemLabel,
    StyledIntroItemNavLink,
    StyledIntroCoTwoLiner
} from "../../../../layout/layout";

const MarriedItem = props => {
    return <StyledIntroItemGrid>
        <StyledIntroItemLabel>Личные отношения:</StyledIntroItemLabel>
        <StyledIntroCoTwoLiner>
            <StyledIntroItemNavLink to='./profile'>{props.isMarried ? 'женат' : 'не женат'}</StyledIntroItemNavLink>
        </StyledIntroCoTwoLiner>
    </StyledIntroItemGrid>
}
export default MarriedItem
