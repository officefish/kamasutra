import {
    SelectCommunityPageAC,
    StartFollowingAction,
    StopFollowingAction, ToggleIsFetchingAC
} from "../../redux/communityReducer";
import ConnectDecoratorFactory from "./ConnectDecoratorFactory";

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
            currentPage: state.community.currentPage,

            /** Data isFetching from remote server status */
            isFetching: state.community.isFetching
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
        },
        /** Set current isFetching data from remote server status */
        toggleIsFetching: isFetching => {
            const action = ToggleIsFetchingAC(isFetching)
            dispatch(action)
        }
    }
}

/** Connect community with reducer */
const connectCommunity = ConnectDecoratorFactory.MakeDecorator(mapStateToProps, mapDispatchToProps)
export default connectCommunity
