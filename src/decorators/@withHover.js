import React from "react";
import {connect} from "react-redux";
import {RegisterHoverAC, ToggleHoverAC} from "../redux/ux/hoverReducer";


const withHover = WrappedComponent => {

    const key1 = Math.random().toString(36).substring(8)
    const key2 = Math.random().toString(36).substring(8)
    const randomKey = "hover_" + key1 + "_" + key2

    const mapStateToProps = (state) =>
    {
        const hover = state.ux.hover.hovers.find((hover) => {return hover.key === randomKey})
        //debugger
        return { isHover: hover ? hover.isHover : false }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            /** Toggle hover status */
            toggleHover: (isHover) => {
                dispatch(ToggleHoverAC(isHover, randomKey))
            },

            registerHover: () => {
                dispatch(RegisterHoverAC(randomKey))
            }
        }
    }

    class Decorator extends React.Component {

        constructor(props) {
            super(props);
            this.toggleHoverHandler = this.toggleHoverHandler.bind(this)

        }

        componentDidMount() {
            this.props.registerHover(randomKey)
        }

        toggleHoverHandler (status) {
            this.props.toggleHover(status)
        }

        render() {
            return <WrappedComponent {...this.props} isHover={this.props.isHover} toggleHover={this.toggleHoverHandler} />
        }
    }



    //console.log (key1)
    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}
export default withHover