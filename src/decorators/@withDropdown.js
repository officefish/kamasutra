import React from "react";
import {connect} from "react-redux";
import {RegisterDropdownAC, ToggleDropdownAC} from "../redux/ux/dropdownReducer";

export const generateRandomKey = () => {
    const key1 = Math.random().toString(36).substring(8)
    const key2 = Math.random().toString(36).substring(8)
    return "dropdown_" + key1 + "_" + key2
}

const mapStateToProps = state =>
{
    return {
        dropdowns: state.ux.dropdown.dropdowns,
    }
}

const mapDispatchToProps = dispatch =>
{
    return {
        toggleDropdown: (isDropdown, key) => {
            dispatch(ToggleDropdownAC(isDropdown, key))
        },
        registerDropdown: key => {
            dispatch(RegisterDropdownAC(key))
        }
    }
}




export const withDropdown = WrappedComponent => {

    class Decorator extends React.Component {

        /** Decorator for Relative parent */
        constructor(props) {
            super(props);
            this.key = generateRandomKey()
            this.toggleDropdownHandler = this.toggleDropdownHandler.bind(this);
        }

        componentDidMount() {
            const { registerDropdown } = this.props
            registerDropdown && registerDropdown(this.key)
        }

        toggleDropdownHandler = isDropdown => {
            const { toggleDropdown } = this.props
            toggleDropdown && toggleDropdown(isDropdown, this.key)
        }

        render() {
            const {dropdowns} = this.props
            const dropdown = dropdowns.find((dropdown) => {return dropdown.key === this.key})
            const isDropdown =  dropdown ? dropdown.isDropdown : false

            /** Remove hovers list property for wrappedComponent */
            let propsClone = Object.assign({}, this.props);
            delete propsClone.dropdowns;

            return <WrappedComponent {...propsClone} dropdownKey={this.key} isDropdown={isDropdown} toggleDropdown={this.toggleDropdownHandler}/>
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}

export const dropdownComponent = WrappedComponent => {

    return class extends React.Component {

        render() {
            /** Render dropdown if isDropdown property equals true */
            const {isDropdown, ...rest} = this.props;
            return isDropdown
                ? <WrappedComponent {...rest}/>
                : <></>
        }
    }
}

export const dropdownComponentWithOutsideHandler = DOMElementRef => WrappedComponent => {
    class Decorator extends React.Component {

        constructor(props) {
            super(props);
            this.key = this.props.dropdownKey
            this.absoluteChildRef = DOMElementRef
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        handleClickOutside = event => {
            /** Get event path Dom hierarchy */
            const path = event.path || (event.composedPath && event.composedPath());

            /** Get toggleDropdown dispatcher from props */
            const {toggleDropdown} = this.props

            /** dropdown DOM elements */
            const absoluteChild = this.absoluteChildRef.current
            const relativeParent = this.absoluteChildRef.current.parentElement

            /** if path not includes dropdown or dropdown parent */
            if (!path.includes(absoluteChild)
            &&  !path.includes(relativeParent))
            {
                /** Call toggleDropdown */
                toggleDropdown && toggleDropdown(false, this.key)
            }
        }

        render () {
            const {dropdowns} = this.props

            const dropdown = dropdowns.find((dropdown) => {return dropdown.key === this.key})
            const isDropdown =  dropdown ? dropdown.isDropdown : false

            /** Remove hovers list property for wrappedComponent */
            let propsClone = Object.assign({}, this.props);
            delete propsClone.dropdowns;

            if (isDropdown) {
                document.addEventListener("click", this.handleClickOutside);
                return <WrappedComponent {...propsClone} />
            } else {
                document.removeEventListener("click", this.handleClickOutside);
                return <></>
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}