import {connect} from "react-redux";
import React from "react";

class ConnectDecoratorFactory {

    static MakeDecorator () {
        return (WrappedComponent) => {
            class ConnectDecorator extends React.Component {
                render() { return <WrappedComponent {...this.props}/> }
            }
            return connect(...arguments)(ConnectDecorator)
        }
    }
}

export default ConnectDecoratorFactory


