import Member from "./Member";

import React from "react";
import CommunityRemoteService from "../../../service/CommunityRemoteService";
import connectCommunity from "../../../decorators/connect/@connectCommunity";
import CommunityListPage from "./CommunityListPage";

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
        if (this.props.users.length === 0) {
            this.__requestGetUsers(this.props.currentPage)
        }
    }

    /** Pagination output controller */
    SelectPageRequestController = (pageNumber) =>
    {
        this.__requestGetUsers(pageNumber)
    }

    /** Remote service output controller */
    SelectPageResponseController = (members, pageNumber, totalUsers) => {

        /** Report reducer about data not isFetching anymore */
        this.props.toggleIsFetching(false)

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
        pagination.totalPages = this.__getTotalPages(this.props.pagination.usersPerPage, this.props.pagination.totalUsers)

        /** Setup pagination range limits */
        pagination.min = 1
        pagination.max = pagination.totalPages

        /** Pagination possible input */
        pagination.possiblePage = this.props.pagination.possiblePage

        return pagination
    }

    /** Pseudo inline protected functions */
    __requestGetUsers = (pageNumber) =>
    {
        /** Report reducer about data isFetching now */
        this.props.toggleIsFetching(true)

        this.remote.requestGetUsers(
            this.SelectPageResponseController, // onSuccess callback
            this.props.pagination.usersPerPage, // page size request param
            pageNumber // page number request param
        )
    }

    __getTotalPages = (itemsPerPage, totalItems) => {
        return Math.ceil( totalItems / itemsPerPage )
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
            <CommunityListPage members={members}
                               isFetching={this.props.pagination.isFetching}
                               pagination={paginationData}
                               selectPage={this.SelectPageRequestController}
                               possiblePageInput={this.props.possiblePageInput}
            />
        </div>
    }
}
export default CommunityList