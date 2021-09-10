import tw from 'tailwind-styled-components'

export const NavigationItemLabel = tw.span`
    ${(p) => (p.$hover ? "text-blue-700" : "text-gray-700")}
    text-s
    cursor:pointer
    `
