const UserPostPhotoItem = props => {
    const {src, alt, navLink} = props
    return <div className='my-2 text-gray-900 text-sm w-full'>
        <a href={navLink}>
            <img src={src} alt={alt} className='w-full' />
        </a>
    </div>

}
export default UserPostPhotoItem