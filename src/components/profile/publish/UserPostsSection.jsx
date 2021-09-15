import {StyledRightColumnSection} from "../../../layout/layout";
import UserPostHeader from "./header/UserPostHeader";
import UserPostTextItem from "./content/UserPostTextItem";
import UserPostPhotoItem from "./content/UserPostPhotoItem";
import UserPostFooter from "./footer/UserPostFooter";

const UserPostsSection = () => {



    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ...'
    const src = 'https://sun9-42.userapi.com/impg/C-ZLlvFrql7FqwL0uajjaXAwZHEfWBJocG9S_Q/crQzdHNc0lk.jpg?size=960x960&quality=96&sign=eef2f4bae116232bf74193df0b79b810&type=album'
    const alt = ''
    const navLink = '/profile'

    const headerProps = {}
    headerProps.userName = 'Сергей Иноземцев'
    headerProps.date = '14 сентября 2021'
    headerProps.userNavLink = '/profile'
    headerProps.dateNavLink = '/profile'

    const footerProps = {}
    footerProps.likes = 7
    footerProps.comments = 3
    footerProps.views = 12

    return <StyledRightColumnSection>
    <div className='p-4'>
        <UserPostHeader {...headerProps} />
        <UserPostTextItem text={text} />
        <UserPostPhotoItem src={src} alt={alt} navLink={navLink} />
        <UserPostFooter {...footerProps} />
    </div>
</StyledRightColumnSection>
}
export default UserPostsSection