import tw from 'tailwind-styled-components'

/** Div which contains Logo svg */
export const UserDropdownItem = tw.a`
   flex 
   items-center 
   px-4 
   py-1 
   hover:bg-gray-100
    `
export const UserDropdownSystemItem = tw(UserDropdownItem)`
    text-blue-700
    text-xs
    py-2
    `
