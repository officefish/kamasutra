import {RemoveAvatarButtonLiner, RemoveAvatarSVG, StyledRemoveAvatarBtn} from "../../../../layout/layout";

const RemoveAvatarItem = (props) => <RemoveAvatarButtonLiner $hover={props.isHover}>
    <StyledRemoveAvatarBtn>
        <RemoveAvatarSVG />
    </StyledRemoveAvatarBtn>
</RemoveAvatarButtonLiner>
export default RemoveAvatarItem
