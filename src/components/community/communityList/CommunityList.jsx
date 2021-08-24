import Member from "./Member";
import * as axios from 'axios'

let CommulityList = (props) =>
{

    let update = props.update

    if (props.data.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            update(response.data.items)
        })
    }

    
    let members = props.data
        .map( user => 
        <Member 
            data={user} 
            follow={props.follow} 
            unfollow={props.unfollow}
            update={props.update}
            key={user.id}
         /> )
    return <div>{members}</div>
}
export default CommulityList;