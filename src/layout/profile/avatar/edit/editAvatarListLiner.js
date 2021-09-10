import tw from 'tailwind-styled-components'

/** Div which setup header items bar */
export const EditAvatarListLiner = tw.div`
    ${(p) => (p.$hover ? "opacity-100" : "opacity-0")}
    absolute 
    bottom-0 
    right-0 
    left-0 
    `