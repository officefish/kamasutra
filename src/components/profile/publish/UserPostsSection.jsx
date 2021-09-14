import {StyledRightColumnSection} from "../../../layout/layout";
import UserPostHeader from "./UserPostHeader";
import UserPostTextItem from "./UserPostTextItem";
import UserPostPhotoItem from "./UserPostPhotoItem";

const UserPostsSection = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ...'
    const src = 'https://sun9-42.userapi.com/impg/C-ZLlvFrql7FqwL0uajjaXAwZHEfWBJocG9S_Q/crQzdHNc0lk.jpg?size=960x960&quality=96&sign=eef2f4bae116232bf74193df0b79b810&type=album'
    const alt = ''
    const navLink = '/profile'
    return <StyledRightColumnSection>
    <div className='p-4'>
        <UserPostHeader userName='Сергей Иноземцев' date='14 сентября 2021' userNavLink='/profile'
                        dateNavLink='profile'/>
        <UserPostTextItem text={text} />
        <UserPostPhotoItem src={src} alt={alt} navLink={navLink} />
    </div>
</StyledRightColumnSection>
}
export default UserPostsSection