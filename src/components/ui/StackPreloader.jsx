
import React from "react";

import preloader from '../../assets/Infinity.gif'

class StackPreloader extends React.Component {

    render () {
        return <>
            { this.props.isGlobalPreloader
                ? <img src={preloader} />
                : <div>{this.props.content}</div>
            }
        </>
    }
}
export default StackPreloader

