
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SELECT_PAGE = "SELECT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const POSSIBLE_PAGE_INPUT = "POSSIBLE_PAGE_INPUT"

const imgSource = 'https://rick-i-morty.online/wp-content/uploads/2007/10/Rick_and_Morty_season_4.png'

let initialState = 
{
  users:[],
  currentPage:1,
  possiblePage:1,
  usersPerPage:10,
  totalUsers:120,
  isFetching:false
}

const communityReducer = (state = initialState, action) => {

    switch(action.type) 
    {
        /** Start following user with given userId*/
        case FOLLOW:
        {
            return {
                ...state, 
                users:  state.users.map( user => 
                    { 
                        return user.id === action.userId
                        ? {...user, followed:true }
                        : user 
                    }
                ),
                
            }
        }
        /** Stop following user with given userId*/
        case UNFOLLOW:
        {
            return {
                ...state,
                users:  state.users.map( user => 
                    { 
                        return user.id === action.userId
                        ? {...user, followed:false }
                        : user 
                    }
                ),
            }
        }
        /** Set current page */
        case SELECT_PAGE:
        {
            return {
                ...state,
                users:[ ...action.users],
                currentPage: action.currentPage,
                totalUsers: action.totalUsers
            }
        }
        /** Fetching data from remote server status */
        case TOGGLE_IS_FETCHING:
        {
            return {
                ...state,
                users:[...state.users],
                isFetching: action.isFetching
            }
        }

        case POSSIBLE_PAGE_INPUT:
        {
            return {
                ...state,
                possiblePage: action.possiblePage
            }
        }

        default: return state
    }    
}

export const PossibleInputPageAC = possiblePage => { return {type:POSSIBLE_PAGE_INPUT, possiblePage} }
export const ToggleIsFetchingAC = isFetching => { return {type:TOGGLE_IS_FETCHING, isFetching } }
export const StartFollowingAction = userId => { return { type:FOLLOW, userId } }
export const StopFollowingAction = userId => { return { type:UNFOLLOW, userId } }
export const SelectCommunityPageAC = (users, pageNumber, totalUsers) =>
{
    return {
        type:SELECT_PAGE,
        users,
        totalUsers,
        currentPage: pageNumber,
    }
}

export default communityReducer

