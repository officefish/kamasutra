import React from "react";
import withGlobalPreloader from "../../../decorators/@withGlobalPreloader";
import MinimalistPagination from "../../ui/pagination/MinimalistPagination";

@withGlobalPreloader('isFetching')
class CommunityListPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return <div>
                    <div>{this.props.members}</div>
                    <MinimalistPagination data={this.props.pagination} onSelect={this.props.selectPage}/>
                </div>
    }
}
export default CommunityListPage