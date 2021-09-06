import {StyledNumFriendsSpan} from "../../../../layout/profile/friends/styledNumFriendsSpan";
import {StyledFriendsNavLink} from "../../../../layout/profile/friends/styledFriendsNavLink";

const FriendsItem = () => <StyledFriendsNavLink to='/profile'>
    Друзья
    <StyledNumFriendsSpan>
        42
    </StyledNumFriendsSpan>
</StyledFriendsNavLink>
export default FriendsItem