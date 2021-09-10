import tw from 'tailwind-styled-components'

export const StyledNavigationSVG = tw.svg`
    ${(p) => (p.$hover ? "text-blue-500" : "text-gray-400")}
    w-4
    h-4
    `