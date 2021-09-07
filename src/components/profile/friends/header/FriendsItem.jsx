import {StyledNumFriendsSpan} from "../../../../layout/profile/friends/header/styledNumFriendsSpan";
import {StyledFriendsNavLink} from "../../../../layout/profile/friends/header/styledFriendsNavLink";

const FriendsItem = () => <StyledFriendsNavLink to='/profile'>
    Друзья
    <StyledNumFriendsSpan>
        42
    </StyledNumFriendsSpan>
</StyledFriendsNavLink>
export default FriendsItem