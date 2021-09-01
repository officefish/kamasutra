import React from "react";
import {HeaderUserIconImg, HeaderUserIconLiner} from "../../../layout/layout";

class HeaderUserIcon extends React.Component {

    render () {
        return <HeaderUserIconLiner>
               <HeaderUserIconImg
                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                   alt=""
               />
            </HeaderUserIconLiner>

    }
}
export default HeaderUserIcon