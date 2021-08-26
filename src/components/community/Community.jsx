import CommunityListContainerIO from "./communityList/CommunityListContainerIO"
import React from "react";
import {setTitle} from "../../redux/@setTitle";
/*
import UpdateCommunity from "./updateCommunity/UpdateCommunity"
*/

@setTitle((props)=> {
    ///debugger
    return 'Kamasutra community'
})
class Community extends React.Component
{
    render () {
        //debugger
        return <div>
            <CommunityListContainerIO />
            {/* UpdateCommunity /> */}
        </div>
    }
}

export default Community;