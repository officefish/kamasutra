import Member from "./Member";
import * as axios from 'axios'
import React from "react";

/*
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
*/

class CommunityList extends React.Component {
    constructor (props) {
        super(props)

        /** External callback when getting response if dynamicly request for current list values */
        this.update = props.update

        /** if list of community is empty in constructing stage, request get them from remore server */
        if (props.data.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.update(response.data.items)
                })
        }
    }

    render () {
        let members = this.props.data
        .map( user => 
        <Member 
            data={user} 
            follow={this.props.follow} 
            unfollow={this.props.unfollow}
            update={this.props.update}
            key={user.id}
         /> )
        return <div>{members}</div>
    } 
}
export default CommunityList