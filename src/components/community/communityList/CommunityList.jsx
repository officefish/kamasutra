import Member from "./Member";
import * as axios from 'axios'
import React from "react";

class CommunityList extends React.Component {
    constructor (props) {
        super(props)

        /** External callback of GET:users, when getting response from remote server */
        this.update = props.update
    }

    componentDidMount () {
         /** If list of community members is empty in constructing stage, request them from remore server */
         if (this.props.data.length === 0) {
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