import {
    PossibleInputPageAC,
    SelectCommunityPageAC,
    StartFollowingAction,
    StopFollowingAction, ToggleIsFetchingAC
} from "../../redux/connect/communityReducer";
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
            isFetching: state.community.isFetching,

            /** Temporary page value which is used for pagination */
            possiblePage: state.community.possiblePage
        }
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Follow member with given id */
        follow: (id) =>
        {
            dispatch(StartFollowingAction(id))
        },
        /** Unfollow member with given id */
        unfollow: (id) =>
        {
            dispatch(StopFollowingAction(id))
        },
        /** Show community members depends on current page */
        selectPage: (members, pageNumber, totalUsers) =>
        {
            dispatch(SelectCommunityPageAC(members, pageNumber, totalUsers))
        },
        /** Set current isFetching data from remote server status */
        toggleIsFetching: isFetching =>
        {
            dispatch(ToggleIsFetchingAC(isFetching))
        },
        /** Change temporary input page in pagination widget */
        possiblePageInput: possiblePage =>
        {
            dispatch(PossibleInputPageAC(possiblePage))
        }
    }
}

/** Connect community with reducer */
const connectCommunity = ConnectDecoratorFactory.MakeDecorator(mapStateToProps, mapDispatchToProps)
export default connectCommunity
