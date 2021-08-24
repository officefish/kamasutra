import { NavLink } from "react-router-dom"
import style from "./Dialogs.module.css" 

const Dialog = (props) => {
    let path = "/dialog/"+props.id
    return (
        <div className={style.Dialog}>
            <NavLink to={path}>{props.companion}</NavLink>
        </div>
    );
}

export default Dialog;