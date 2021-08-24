let Member = (props) => {
    
    /** Member fields */
    const name = props.data.fullname
    const status = props.data.status
    const country = props.data.location.country
    const city = props.data.location.city
    const imgSrc = props.data.imgSrc
    const followed = props.data.followed
    const id = props.data.id

    /** IO Controllers */
    const followController = props.follow
    const unfollowController = props.unfollow

    /** Listeners */
    const onFollow = () => { followController(id) }
    const onUnfollow = () => { unfollowController(id) }

    return <div>
        <span>
            <img src={imgSrc} />
            {
                followed 
                ? <button onClick={onUnfollow}>unfollow</button> 
                : <button onClick={onFollow}>follow</button>
            }
        </span>
        <span>
            <div>{name}</div>
            <div>{status}</div>
        </span>
        <span>
            <div>{country}</div>
            <div>{city}</div>
        </span>
    </div>
}
export default Member