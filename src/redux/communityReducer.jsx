
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SELECT_PAGE = "SELECT_PAGE"

const imgSource = 'https://rick-i-morty.online/wp-content/uploads/2007/10/Rick_and_Morty_season_4.png'

let initialState = 
{
  users:[],
  currentPage:1,
  usersPerPage:5,
  totalUsers:12
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
            return {...state,
                users:[ ...action.users],
                currentPage: action.currentPage,
                totalUsers: action.totalUsers
            }
        }

        default: return state
    }    
}

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

