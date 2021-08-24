import { connect } from "react-redux";
import { StartFollowingAction, StopFollowingAction } from "../../../redux/communityReducer";
import CommulityList from "./CommunityList";

let mapStateToProps = (state) =>
{
    return {
        /** List of community members */
        data:state.community.users
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Follow member with given id */
        follow: (id) =>
        {
            const action = StartFollowingAction(id)
            dispatch(action)
        },
        /** Unfollow member with given id */
        unfollow: (id) =>
        {
            const action = StopFollowingAction(id)
            dispatch(action)
        }
    }
}

const CommunityListContainerIO = connect(mapStateToProps, mapDispatchToProps)(CommulityList)
export default CommunityListContainerIO