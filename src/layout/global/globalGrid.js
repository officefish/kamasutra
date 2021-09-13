import tw from 'tailwind-styled-components'

const GlobalContainer = tw`
    container
    mx-auto
    `
const GlobalDisplay = tw`
    flex 
    items-start 
    pt-4
    `
export const GlobalGrid = tw.div`
  ${GlobalContainer}
  ${GlobalDisplay}
    `