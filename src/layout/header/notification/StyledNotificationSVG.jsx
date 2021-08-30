import tw from 'tailwind-styled-components'

/** Div which wrappes notification svg */
const StyledNotificationWrapper = tw.div`
   px-2
   flex
   w-16 
   items-center 
   justify-items-center
   bg-gray-0 
   h-full 
   group
   grid
    `
const NotificationBackground = tw.div`
    items-center 
    justify-items-center
    bg-gray-0 
    group-hover:bg-gray-100 
    cursor-pointer
    absolute
    w-16
    h-16
    grid
`

const NotificationSVG = tw.svg`
    h-full 
    w-6 
    text-gray-400 
    cursor-pointer 
    group-hover:text-gray-600
    `



export const StyledNotificationSVG = () => {
    return <StyledNotificationWrapper>
        <NotificationBackground>
        <NotificationSVG
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
        </NotificationSVG>
        </NotificationBackground>
    </StyledNotificationWrapper>
}
