import {StyledAvatarImg} from "../../../layout/layout";
import {NavLink} from "react-router-dom";
import RemoveAvatarItem from "./edit/RemoveAvatarItem";
import EditAvatarList from "./edit/EditAvatarList";

const AvatarItem = () => <div className='relative group'>
        <StyledAvatarImg
             src="https://sun9-86.userapi.com/s/v1/if1/wSMoRFqc_3_ymV62mY2UvE4hhOvaq6th1r_sOy7_DiDZP4napVjmvcWLDylOsr1xgU4hAs99.jpg?size=200x200&amp;quality=96&amp;crop=25,21,589,589&amp;ava=1"
             alt="Сергей  Иноземцев" width="200" height="200" />
        <RemoveAvatarItem />
        <EditAvatarList />
    </div>
export default AvatarItem