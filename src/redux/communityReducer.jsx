
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"


let initialState = 
{
  users:
  [
    { id:1, followed:true, fullname:"Andrew", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}}         
  ]
} 

const communityReducer = (state = initialState, action) => {

    switch(action.type) 
    {
        /** Start following */
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
        /** Stop following */
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
        default: return state
    }    
}

export const StartFollowingAction = (userId) => { return { type:FOLLOW, userId:userId } }
export const StopFollowingAction = (userId) => { return { type:UNFOLLOW, userId:userId } }

export default communityReducer

