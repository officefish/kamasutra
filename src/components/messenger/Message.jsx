import style from "./Dialogs.module.css" 

const Message = (props) => {
    let id = props.id;
    return (
        <div className={style.Message}>
            {id}, {props.text}
        </div>
    );
}

export default Message;