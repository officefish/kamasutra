import CommunityListContainerIO from "./communityList/CommunityListContainerIO"
import UpdateCommunity from "./updateCommunity/UpdateCommunity"

let Community = () =>
{
    return <div>
                <CommunityListContainerIO />
                <UpdateCommunity />
            </div>
}
export default Community;