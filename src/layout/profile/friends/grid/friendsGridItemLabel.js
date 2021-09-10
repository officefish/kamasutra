import tw from 'tailwind-styled-components'

export const FriendsGridItemLabel = tw.div`
    ${(p) => (p.$hover ? "underline text-blue-700" : "no-underline text-gray-500")}
    truncate 
    w-full 
    w-full 
    text-center
    text-xs
    `