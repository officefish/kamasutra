import React from "react";
import {connect} from "react-redux";
import {RegisterAccordionAC, ToggleAccordionAC} from "../redux/ux/accordionReducer";
import {generateRandomKey} from "../tools/idGenerator";

const mapStateToProps = state =>
{
    return {
        accordions: state.ux.accordion.accordions,
    }
}

const mapDispatchToProps = dispatch =>
{
    return {
        toggleAccordion: (key) => {
            dispatch(ToggleAccordionAC(key))
        },
        registerAccordion: key => {
            dispatch(RegisterAccordionAC(key))
        }
    }
}

export const withAccordion = WrappedComponent => {

    class Decorator extends React.Component {

        /** Decorator for Relative parent */
        constructor(props) {
            super(props);
            this.key = generateRandomKey('accordion')
            this.toggleAccordionHandler = this.toggleAccordionHandler.bind(this);
        }

        componentDidMount() {
            const { registerAccordion } = this.props
            registerAccordion && registerAccordion(this.key)
        }

        toggleAccordionHandler = () => {
            const { toggleAccordion } = this.props
            toggleAccordion && toggleAccordion(this.key)
        }

        render() {
            const {accordions} = this.props
            const accordion = accordions.find((accordion) => {return accordion.key === this.key})
            const isAccordion =  accordion ? accordion.isAccordion : false

            /** Remove accordions list property for wrappedComponent */
            let propsClone = Object.assign({}, this.props);
            delete propsClone.accordion;

            return <WrappedComponent {...propsClone} accordionKey={this.key} isAccordion={isAccordion} toggleDropdown={this.toggleDropdownHandler}/>
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}

export const accordionComponent = WrappedComponent => {
    return class extends React.Component {
        render() {
            /** Render accordion if isAccordion property equals true */
            const {isAccordion, ...rest} = this.props;
            return isAccordion
                ? <WrappedComponent {...rest}/>
                : <></>
        }
    }
}