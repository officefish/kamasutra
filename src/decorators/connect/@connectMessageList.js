import ConnectDecoratorFactory from "./ConnectDecoratorFactory";

let mapStateToProps = (state) =>
{
    return {
        /** List of messages data */
        data:state.messenger.messages
    }
}

/** Connect Messages list widget with reducer */
const connectMessageList = ConnectDecoratorFactory.MakeDecorator(mapStateToProps)
export default connectMessageList

