import React from "react";
import RemoveImgBtn from "../../ui/button/RemoveImgBtn";
import withHover from "../../../decorators/@withHover";
import {StyledPhotoSectionImg, StyledPhotoSectionImgLiner, StyledPhotoSectionImgNavLink} from "../../../layout/layout";

@withHover
class PhotoSectionItem extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
    }

    onMouseEnterHandler () {
        const {toggleHover} = this.props
        toggleHover && toggleHover(true)
    }

    onMouseLeaveHandler () {
        const {toggleHover} = this.props
        toggleHover && toggleHover(false)
    }

    render () {
        const {removeNavLink, navLink, src, alt, isHover} = this.props

        return <StyledPhotoSectionImgLiner
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>
                <StyledPhotoSectionImgNavLink to={navLink}>
                    <StyledPhotoSectionImg
                         src={src}
                         alt={alt}/>
                </StyledPhotoSectionImgNavLink>
                <RemoveImgBtn isHover={isHover} navLink={removeNavLink} />
            </StyledPhotoSectionImgLiner>
    }
}
export default PhotoSectionItem