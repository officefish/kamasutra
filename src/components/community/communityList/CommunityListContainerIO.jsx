import { connect } from "react-redux";
import CommulityList from "./CommunityList";

let mapStateToProps = (state) =>
{
    return {
        /** List of community members */
        data:state.community.users
    }
}

const CommunityListContainerIO = connect(mapStateToProps)(CommulityList)
export default CommunityListContainerIO