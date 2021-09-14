import React from "react";

class UserPostHeader extends React.Component {
    render() {
        const {userName, date, userNavLink, dateNavLink} = this.props

        return <div className='flex justify-between items-center pb-2'>
            <div className='flex items-center'>
                <div className='flex-shrink-0'>
                    <img className='w-16 h-16 rounded-full' src="https://sun9-86.userapi.com/s/v1/if1/wSMoRFqc_3_ymV62mY2UvE4hhOvaq6th1r_sOy7_DiDZP4napVjmvcWLDylOsr1xgU4hAs99.jpg?size=200x200&quality=96&crop=25,21,589,589&ava=1"
                         alt={userName}/>
                </div>
                <div className='pl-4'>
                    <a className='block text-blue-700 hover:underline font-medium text-base' href={userNavLink}>{userName}</a>
                    <a className='block text-gray-500 hover:underline' href={dateNavLink}>{date}</a>
                </div>
            </div>
            <button className='pb-5 focus:outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                </svg>
            </button>
        </div>
    }
}
export default UserPostHeader