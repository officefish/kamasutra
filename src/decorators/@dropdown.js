import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
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
export const dropdownComponent = label => (WrappedComponent) => {

    class Decorator extends React.Component {

        constructor(props) {
            super(props);
            this.label = label

            this.wrappedComponentRef = React.createRef();
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        handleClickOutside = event => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(this.wrappedComponentRef.current)) {

                console.log(path)
                console.log(this.wrappedComponentRef.current)
            }
        }



        render()
        {
            /** this if calls bad state warning */
            const currentDropdown = this.props.dropdowns.find(dropdown => dropdown.label === this.label)

            if (currentDropdown && currentDropdown.isOpen) {
                document.addEventListener("click", this.handleClickOutside);

                const wrappedComponent =  <WrappedComponent
                    {...this.props}
                />

                console.log (wrappedComponent._reactInternals)
                //console.log (wrappedComponent._reactInternals.child.child)
                //console.log (wrappedComponent._reactInternals.child.child.ref=this.wrappedComponentRef)

                return wrappedComponent


            } else {
                document.removeEventListener("click", this.handleClickOutside);
                return <div className='absolute'/>;
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}

export const withDropdown = label => (WrappedComponent) => {

    class Decorator extends React.Component {

        constructor(props) {
            super(props);
            this.label = label
            this.handleDropdownOn = this.handleDropdownOn.bind(this);
        }

        handleDropdownOn = event => {
           this.props.toggleDropdown(true, this.label)
        }

        render() {
            /** this if calls bad state warning */
            return <WrappedComponent {...this.props} dropdownOn={this.handleDropdownOn}/>
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Decorator)
}