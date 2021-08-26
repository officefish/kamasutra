/**
  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above
*/
import React from "react";


export const setTitle = getTitle => (WrappedComponent) => {

    return class extends React.Component {

        updateTitle = (props) => {
            // Check if the callback has returned something,
            // and if so - update the title
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
}

