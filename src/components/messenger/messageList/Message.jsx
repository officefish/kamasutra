const Message = (props) => {
    let id = props.id;
    return (
        <div >
            {id}, {props.text}
        </div>
    );
}

export default Message;