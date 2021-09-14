
import {RemoveImgBtnLiner, RemoveImgSVG, StyledRemoveImgNavLink} from '../../../layout/layout';

const RemoveImgBtn = props =>
    <RemoveImgBtnLiner $hover={props.isHover}>
        <StyledRemoveImgNavLink to={props.navLink}>
            <RemoveImgSVG />
        </StyledRemoveImgNavLink>
    </RemoveImgBtnLiner>
export default RemoveImgBtn
