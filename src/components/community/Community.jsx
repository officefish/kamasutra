import React from "react";
import {setTitle} from "../../decorators/@setTitle";
import CommunityList from "./communityList/CommunityList";
/*
import UpdateCommunity from "./updateCommunity/UpdateCommunity"
*/

@setTitle((props)=> {
    return 'Kamasutra community'
})
class Community extends React.Component
{
    render () {
        return <div>
            <CommunityList />
            {/* UpdateCommunity /> */}
        </div>
    }
}

export default Community;