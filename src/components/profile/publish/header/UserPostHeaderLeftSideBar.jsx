import {
    DivFlxItmCnt,
    DivFlxShr0,
    ImgSz16RndFll,
    DivPl4
} from "./../../../../layout/layout";
import React from "react";

const UserPostHeaderLeftSideBar = props => {

    const {userName, userNavLink, dateNavLink, date} = props

    return <DivFlxItmCnt>
        <DivFlxShr0>
            <ImgSz16RndFll src="https://sun9-86.userapi.com/s/v1/if1/wSMoRFqc_3_ymV62mY2UvE4hhOvaq6th1r_sOy7_DiDZP4napVjmvcWLDylOsr1xgU4hAs99.jpg?size=200x200&quality=96&crop=25,21,589,589&ava=1"
                           alt={userName}/>
        </DivFlxShr0>
        <DivPl4>
            <a className='block text-blue-700 hover:underline font-medium text-base' href={userNavLink}>{userName}</a>
            <a className='block text-gray-500 hover:underline' href={dateNavLink}>{date}</a>
        </DivPl4>
    </DivFlxItmCnt>
}
export default UserPostHeaderLeftSideBar