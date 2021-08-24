import Member from "./Member";

let CommulityList = (props) =>
{
    let members = props.data
        .map( user => <Member data={user} /> )
    return <div>{members}</div>
}
export default CommulityList;