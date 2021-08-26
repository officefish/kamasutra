import ConnectDecoratorFactory from "./ConnectDecoratorFactory";

let mapStateToProps = (state) =>
{
    return {
        /** List of dialogs data */
        data:state.messenger.dialogs
    }
}

/** Connect newDialog widget with reducer */
const connectDialogList = ConnectDecoratorFactory.MakeDecorator(mapStateToProps)
export default connectDialogList
