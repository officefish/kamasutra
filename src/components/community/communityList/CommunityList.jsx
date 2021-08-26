import Member from "./Member";

import React from "react";
import MinimalistPagination, {getTotalPages} from "../../ui/pagination/MinimalistPagination";
import CommunityRemoteService from "../../../service/CommunityRemoteService";
import connectCommunity from "../../../decorators/connect/@connectCommunity";

@connectCommunity
class CommunityList extends React.Component {

    constructor(props) {
        super(props);

        /** Remote request service */
        this.remote = new CommunityRemoteService()
    }

    /** Override react component behavior */
    // call once with constructor
    componentDidMount ()
    {
        this.InitialRequestController()
    }

    /** Controllers */
    /** Initial request controller */
    InitialRequestController = () =>
    {
        /** If list of community members is empty in constructing stage, request them from remote server */
        if (this.props.users.length === 0) this.__requestGetUsers(this.props.currentPage)
    }

    /** Pagination output controller */
    SelectPageRequestController = (pageNumber) =>
    {
        this.__requestGetUsers(pageNumber)
    }

    /** Remote service output controller */
    SelectPageResponseController = (members, pageNumber, totalUsers) => {
        this.props.selectPage(members, pageNumber, totalUsers)
    }

    /** Get pagination data fon jsx Pagination widget */
    getPaginationData = () =>
    {
        /** Create pagination interface data */
        const pagination = {}

        /** Copy current community page value from state to pagination input data*/
        pagination.currentPage = this.props.pagination.currentPage

        /** Total number of pages needs tp represent all community members */
        pagination.totalPages = getTotalPages(this.props.pagination.usersPerPage, this.props.pagination.totalUsers)

        /** Setup pagination range limits */
        pagination.min = 1
        pagination.max = pagination.totalPages

        return pagination
    }

    /** Pseudo inline protected functions */
    __requestGetUsers = (pageNumber) =>
    {
        this.remote.requestGetUsers(
            this.SelectPageResponseController, // onSuccess callback
            this.props.usersPerPage, // page size request param
            pageNumber // page number request param
        )
    }

    /** Render jsx view */
    render ()
    {
        const paginationData = this.getPaginationData()
        const members = this.props.users
            .map( user =>
                <Member
                    data={user}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    update={this.props.update}
                    key={user.id}
                 /> )
        return <div>
            <div>{members}</div>
            <MinimalistPagination data={paginationData} onSelect={this.SelectPageRequestController}/>
        </div>
    }
}
export default CommunityList