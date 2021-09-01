import tw from 'tailwind-styled-components'
import styled from 'styled-components'

const UserNameBase = styled.div`
  max-width: 5rem;
  `

/** Div which contains Logo svg */
export const StyledHeaderUserName = tw(UserNameBase)`
   font-medium
   truncate
    `