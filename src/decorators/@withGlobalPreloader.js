/** Show global preloader when user waiting some data or content generation passes */
import {ToggleGlobalPreloaderAC} from "../redux/uxReducer";
import React from "react";
import ConnectDecoratorFactory from "./connect/ConnectDecoratorFactory";
import {connect} from "react-redux";
import StackPreloader from "../components/ui/StackPreloader";


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
const withGlobalPreloader = (flag) => (WrappedComponent) => {
    class Decorator extends React.Component {

        constructor (props) {
            super(props)

        }

        render()
        {
            if (this.props[flag] != this.props.isGlobalPreloader) {
                this.props.togglePreloader(this.props[flag])
            }

            return <StackPreloader isGlobalPreloader={this.props.isGlobalPreloader} content={<WrappedComponent {...this.props}/>} />
        }
    }
    const Connector = connect(mapStateToProps, mapDispatchToProps)(Decorator)
    return Connector
}
export default withGlobalPreloader

