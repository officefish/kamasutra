import { connect } from "react-redux";
import {
    SelectCommunityPageAC,
    StartFollowingAction,
    StopFollowingAction
} from "../../../redux/communityReducer";
import CommulityList from "./CommunityList";

let mapStateToProps = (state) =>
{
    return {

       /** List of community members in page */
       users: state.community.users,

       pagination: {
            /** Number of users showed in single page */
            usersPerPage: state.community.usersPerPage,

            /** Total number of community members */
            totalUsers: state.community.totalUsers,

            /** Current page value */
            currentPage: state.community.currentPage
        }
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
        },
        /** Show community members depends on current page */
        selectPage: (members, pageNumber, totalUsers) =>
        {
            const action = SelectCommunityPageAC(members, pageNumber, totalUsers)
            dispatch(action)
        }
    }
}

const CommunityListContainerIO = connect(mapStateToProps, mapDispatchToProps)(CommulityList)
export default CommunityListContainerIO