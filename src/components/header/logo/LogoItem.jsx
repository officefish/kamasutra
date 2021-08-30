import React from "react";
import {StyledLogoLink, StyledLogoSVG} from "../../../layout/layout";

class LogoItem extends React.Component {

    render () {
        return <StyledLogoLink href={"#"}>
                <StyledLogoSVG />
            </StyledLogoLink>
    }
}
export default LogoItem