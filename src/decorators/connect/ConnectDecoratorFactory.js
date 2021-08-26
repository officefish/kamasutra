import {connect} from "react-redux";
import React from "react";

class ConnectDecoratorFactory {

    static MakeDecorator () {
        return (WrappedComponent) => {
            class Decorator extends React.Component {
                render() { return <WrappedComponent {...this.props}/> }
            }
            const Connector = connect(...arguments)(Decorator)
            return Connector
        }
    }
}

export default ConnectDecoratorFactory


