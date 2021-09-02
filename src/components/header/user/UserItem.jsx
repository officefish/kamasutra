import HeaderUserName from "./HeaderUserName";
import HeaderUserIcon from "./HeaderUserIcon";
import HeaderUserDropdownControl from "./HeaderUserDropdownControl";
import {StyledRightSideItems} from "../../../layout/header/styledRightSideItems";

const UserItem = () => {
    return <StyledRightSideItems>
        <HeaderUserName />
        <HeaderUserIcon />
        <HeaderUserDropdownControl />
    </StyledRightSideItems>
}
export default UserItem