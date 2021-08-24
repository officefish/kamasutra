
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const UPDATE_COMMUNITY = "UPDATE_COMMUNITY"

let initialState = 
{
  users:
  [
    { id:1, followed:true, fullname:"Nikita", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}},
    { id:2, followed:true, fullname:"Roman", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}},         
    { id:3, followed:true, fullname:"Dmitriy", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}},         
    { id:4, followed:true, fullname:"Sergey", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}}         
  ]
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
        /** Update community feed */
        case UPDATE_COMMUNITY:
        {
            return {...state, users: [...state.users, ...action.users] }
        }
        default: return state
    }    
}

export const StartFollowingAction = userId => { return { type:FOLLOW, userId:userId } }
export const StopFollowingAction = userId => { return { type:UNFOLLOW, userId:userId } }
export const UpdateCommunity = () => { return { type:UPDATE_COMMUNITY } }

export default communityReducer

