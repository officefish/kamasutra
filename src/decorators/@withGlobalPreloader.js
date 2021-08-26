/** Show global preloader when user waiting some data or content generation passes */
import {ToggleGlobalPreloaderAC} from "../redux/uxReducer";
import React from "react";
import ConnectDecoratorFactory from "./connect/ConnectDecoratorFactory";
import {connect} from "react-redux";
import GlobalPreloader from "../components/ui/GlobalPreloader";


let mapStateToProps = (state) =>
{
    return {
        /** Preloading status */
        isGlobalPreloader: state.ux.isGlobalPreloader,
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Toggle preloader status */
        togglePreloader: (isGlobalPreloader) => { dispatch( ToggleGlobalPreloaderAC(isGlobalPreloader) ) }
    }
}

/** Decorator function for wrapped components which needs preloading  */
const withGlobalPreloader = (WrappedComponent) => {
    class Decorator extends React.Component {
        render()
        { return <GlobalPreloader {...this.props}>
                    <WrappedComponent {...this.props}/>
                </GlobalPreloader>
        }
    }
    const Connector = connect(mapStateToProps, mapDispatchToProps)(Decorator)
    return Connector
}
export default withGlobalPreloader

