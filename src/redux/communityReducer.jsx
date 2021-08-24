
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const UPDATE_COMMUNITY = "UPDATE_COMMUNITY"

const imgSource = 'https://rick-i-morty.online/wp-content/uploads/2007/10/Rick_and_Morty_season_4.png'

let initialState = 
{
  users:[]
  /*
  [
    { id:1, imgSrc:imgSource, followed:true, fullname:"Nikita", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}},
    { id:2, imgSrc:imgSource, followed:true, fullname:"Roman", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}},         
    { id:3, imgSrc:imgSource, followed:true, fullname:"Dmitriy", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}},         
    { id:4, imgSrc:imgSource, followed:true, fullname:"Sergey", status:"I am a boss", location:{country:"Russia", city:"SPB",timeZone:"UTC+4"}}         
  ]
  */
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
export const UpdateCommunityAction = (users) => { return { type:UPDATE_COMMUNITY, users:users } }

export default communityReducer

