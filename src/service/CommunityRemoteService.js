import * as axios from "axios";

class CommunityRemoteService {

    constructor(props) {
        /** Configure axios instance */
        // The specified config will be merged with the request config.
        this.remote = axios.create({

            baseURL: 'https://social-network.samuraijs.com/api/1.0/',

            // `headers` are custom headers to be sent
            headers: {'Content-Type': 'text/plain'},

            // `timeout` specifies the number of milliseconds before the request times out.
            // If the request takes longer than `timeout`, the request will be aborted.
            timeout: 1000, // default is `0` (no timeout)

            // `withCredentials` indicates whether or not cross-site Access-Control requests
            // should be made using credentials
            withCredentials: false, // default
        })
    }

    /**
     *  @onSuccess (function) listener function which will be called with response function on success request
     *
     *  @count: (integer - default: 10 - maximum: 100)
     *  page size (how many items will be returned in response)
     *
     *  @page: (integer - default: 1)
     *  number of portion of items
     *
     *  @term: (string)
     *  user name string for searching
     *
     *  @friendMask (boolean) if false find all users, else:
     *  @friend: (boolean)
     *  if true, then find only followed users, false - only not followed users,
     */
    requestGetUsers = (onSuccess, count = 10, page = 1, term = '', friendMask = false, friend = false) => {

        /** Setup request params */
        const config = {method:'get'}

        config.params = { count:count, page:page }
        if (term.length) config.params.term = term
        if (friendMask) config.params.friend = friend

        this.remote
            .get('/users', config)
            .then(response => {
                onSuccess(response.data.items, page, response.data.totalCount)
            })
    }

}

export default CommunityRemoteService