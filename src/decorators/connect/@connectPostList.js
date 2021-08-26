import ConnectDecoratorFactory from "./ConnectDecoratorFactory";

let mapStateToProps = (state) =>
{
    return {
        /** List of posts data */
        data:state.profile.posts
    }
}

/** Connect PostList widget with reducer */
const connectPostList = ConnectDecoratorFactory.MakeDecorator(mapStateToProps)
export default connectPostList

