import { Link } from "react-router-dom";
import tw from 'tailwind-styled-components'

export const StyledRemoveImgNavLink = tw(Link)`
    flex 
    items-center 
    justify-center 
    w-4 
    h-4 
    bg-opacity-50 
    bg-black 
    text-white 
    rounded-tr-sm 
    rounded-bl-sm
    text-opacity-50 
    hover:text-opacity-100 
    hover:bg-opacity-100 
    focus:outline-none
    `

