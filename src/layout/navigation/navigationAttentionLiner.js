import tw from 'tailwind-styled-components'

export const NavigationAttentionLiner = tw.div`
   ${(p) => (p.$hover ? "bg-blue-700" : "bg-gray-400 ")}
   ml-5 
   rounded-full 
   w-4 
   h-4 
   flex 
   justify-center 
   items-center 
   text-white 
   text-xs
    `
