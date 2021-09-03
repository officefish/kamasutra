import React from "react";
import {connect} from "react-redux";
import {ToggleDropdownAC} from "../redux/ux/dropdownReducer";

let mapStateToProps = (state) =>
{
    return {
        /** Preloading status */
        dropdowns: state.ux2.dropdowns,
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Toggle preloader status */
        toggleDropdown: (isOpen, label) => { dispatch( ToggleDropdownAC(isOpen, label) ) }
    }
}

/** Decorator function for wrapped components which needs preloading  */
export const dropdownComponent = (label, ref) => (WrappedComponent) => {

    class Decorator extends React.Component {

        constructor(props) {
            super(props);
            this.label = label
            this.absoluteChildRef = ref
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        handleClickOutside = event => {
            /** Get event path Dom hierarchy */
            const path = event.path || (event.composedPath && event.composedPath());

            /** dropdown DOM elements */
            const absoluteChild = this.absoluteChildRef.current
            const relativeParent = this.absoluteChildRef.current.parentElement

            /** if path not includes dropdown or dropdown parent */
            if (!path.includes(absoluteChild)
            &&  !path.includes(relativeParent))
            {
                this.props.toggleDropdown(false, this.label)
            }
        }

        render()
        {
            /** current dropdown status */
            const currentDropdown = this.props.dropdowns.find(dropdown => dropdown.label === this.label)

            /** Render dropdown if open */
            if (currentDropdown && currentDropdown.isOpen)
            {
                document.addEventListener("click", this.handleClickOutside);
                return  <WrappedComponent {...this.props}/>
            }
            /** Render empty div if not */
            else {
                document.removeEventListener("click", this.handleClickOutside);
                return <></>;
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}

export const withDropdown = label => (WrappedComponent) => {

    class Decorator extends React.Component {

        /** Decorator for Relative parent */
        constructor(props) {
            super(props);
            this.label = label
            this.handleDropdownOn = this.handleDropdownOn.bind(this);
        }

        handleDropdownOn = event => {
           this.props.toggleDropdown(true, this.label)
        }

        render() {
            return <WrappedComponent {...this.props} dropdownOn={this.handleDropdownOn}/>
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}