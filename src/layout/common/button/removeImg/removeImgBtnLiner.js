import tw from 'tailwind-styled-components'

export const RemoveImgBtnLiner = tw.div`
    ${(p) => (p.$hover ? "opacity-100" : "opacity-0")}
    absolute 
    top-0 
    right-0 
    `