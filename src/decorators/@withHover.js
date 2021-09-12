import React from "react";
import {connect} from "react-redux";
import {RegisterHoverAC, ToggleHoverAC} from "../redux/ux/hoverReducer";

export const generateRandomKey = () => {
    const key1 = Math.random().toString(36).substring(8)
    const key2 = Math.random().toString(36).substring(8)
    return "hover_" + key1 + "_" + key2
}

export const withHover = WrappedComponent => {

    const mapStateToProps = state =>
    {
        return {hovers:state.ux.hover.hovers}
    }

    const mapDispatchToProps = dispatch =>
    {
        return {
            toggleHover: (isHover, randomKey) => {
                dispatch(ToggleHoverAC(isHover, randomKey))
            },
            registerHover: (randomKey) => {
                dispatch(RegisterHoverAC(randomKey))
            }
        }
    }

    class Decorator extends React.Component {

        constructor(props) {
            super(props);
            this.toggleHoverHandler = this.toggleHoverHandler.bind(this)
            this.randomKey = generateRandomKey()
        }

        componentDidMount() {
            this.props.registerHover(this.randomKey)
        }

        toggleHoverHandler (status) {
            this.props.toggleHover(status, this.randomKey)
        }

        render() {
            const hover = this.props.hovers.find((hover) => {return hover.key === this.randomKey})
            const isHover =  hover ? hover.isHover : false

            /** Remove hovers list property for wrappedComponent */
            let propsClone = Object.assign({}, this.props);
            delete propsClone.hovers;

            return <WrappedComponent {...propsClone} isHover={isHover} toggleHover={this.toggleHoverHandler} />
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}
export default withHover
