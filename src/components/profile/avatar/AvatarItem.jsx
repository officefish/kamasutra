import React from "react";
import {StyledAvatarImg} from "../../../layout/layout";
import RemoveAvatarItem from "./edit/RemoveAvatarItem";
import EditAvatarList from "./edit/EditAvatarList";
import withHover from "../../../decorators/@withHover";
import {NavLink} from "react-router-dom";


@withHover
class AvatarItem extends React.Component {

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
        return <div  className='relative'
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
            <NavLink to='/profile'>
                <StyledAvatarImg
                  src="https://sun9-86.userapi.com/s/v1/if1/wSMoRFqc_3_ymV62mY2UvE4hhOvaq6th1r_sOy7_DiDZP4napVjmvcWLDylOsr1xgU4hAs99.jpg?size=200x200&amp;quality=96&amp;crop=25,21,589,589&amp;ava=1"
                  alt="Сергей  Иноземцев" width="200" height="200" />
            </NavLink>
          <RemoveAvatarItem isHover={this.props.isHover} />
          <EditAvatarList isHover={this.props.isHover} />
        </div>
    }
}
export default AvatarItem