import tw from 'tailwind-styled-components'
import styled from "styled-components"

/** Container with fixed width */
const FixedWidthContainerBase = styled.section`
    max-width:970px
  `
export const FixedWidthHeaderContainer = tw(FixedWidthContainerBase)`
    container
    mx-auto
  `

