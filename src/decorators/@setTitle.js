/**
  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above
*/
import React from "react";
import {connect} from "react-redux";

/** SetTitle redux wrapper */
let mapStateToProps = (state) =>
{
    return {

        /** Page title */
        title: state.document.title
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Follow member with given id */
        setTitle: (title) => { dispatch( SetTitleAC(title) ) }
    }
}

/** SetTitle decorator */
export const setTitle = (getTitle) => (WrappedComponent) => {

    class SetTitleDecorator extends React.Component {

        constructor(props) {
            super(props);
            document.title = props.title
        }

        updateTitle = (props) => {
            const title = getTitle(props)
            if(title) {
                document.title = title
            }
        }

        componentDidMount() {
            this.updateTitle(this.props)
        }
        componentWillReceiveProps(props) {
            this.updateTitle(props)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    const SetTitleDecoratorConnector = connect(mapStateToProps, mapDispatchToProps)(SetTitleDecorator)
    return SetTitleDecoratorConnector

}


/** SetTitle reducer */
const SET_TITLE = 'SET_TITLE'

let initialState =
    {
        /** Document title */
        title:'kamasutra'
    }

const titleReducer = (state = initialState, action) => {

    switch (action.type) {
        /** Change document title */
        case SET_TITLE: {
            return { ...state, title:state.title }
        }

        default: return state
    }
}
export default titleReducer

export const SetTitleAC = title => { return { type:SET_TITLE, title } }

