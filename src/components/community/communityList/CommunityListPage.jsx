import React from "react";
import withGlobalPreloader from "../../../decorators/@withGlobalPreloader";
import MinimalistPagination from "../../ui/pagination/MinimalistPagination";

@withGlobalPreloader('isFetching')
class CommunityListPage extends React.Component {

   render () {
        return <div>
                    <div>{this.props.members}</div>
                    <MinimalistPagination
                        data={this.props.pagination}
                        onSelect={this.props.selectPage}
                        onInputPreview={this.props.possiblePageInput}
                    />
                </div>
  }
}
export default CommunityListPage