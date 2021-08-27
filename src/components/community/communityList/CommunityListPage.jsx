import React from "react";
import withGlobalPreloader from "../../../decorators/@withGlobalPreloader";

@withGlobalPreloader('isFetching')
class CommunityListPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return <div>{this.props.members}</div>
    }
}
export default CommunityListPage