import Member from "./Member";

let CommulityList = (props) =>
{
    let members = props.data
        .map( user => 
        <Member 
            data={user} 
            follow={props.follow} 
            unfollow={props.unfollow}
            key={user.id}
         /> )
    return <div>{members}</div>
}
export default CommulityList;