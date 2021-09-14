const UserPostPhotoItem = props => {
    const {src, alt, navLink} = props
    return <a href={navLink} className='py-2 text-gray-900 text-sm w-full'>
        <img src={src} alt={alt} className='w-full' />
    </a>
}
export default UserPostPhotoItem