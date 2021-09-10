/** Show global preloader when user waiting some data or connect generation passes */
import {ToggleGlobalPreloaderAC} from "../redux/ux/preloadReducer";
import React from "react";
import {connect} from "react-redux";
import StackPreloader from "../components/ui/StackPreloader";


let mapStateToProps = (state) =>
{
    return {
        /** Preloading status */
        isGlobalPreloader: state.ux.preload.isGlobalPreloader,
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

        render()
        {
            /** Possible solution but it shoulb
            useEffect(() => {
                if (flag) {
                    this.props.togglePreloader(this.props[flag])
                }
            }, [this.props, this.props.togglePreloader]);
            */

            /** this if calls bad state warning */
            if (this.props[flag] !== this.props.isGlobalPreloader) {
                this.props.togglePreloader(this.props[flag])
            }


            return <StackPreloader isGlobalPreloader={this.props.isGlobalPreloader} content={<WrappedComponent {...this.props}/>} />
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}
export default withGlobalPreloader

