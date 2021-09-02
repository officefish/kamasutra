import tw from 'tailwind-styled-components'
import styled from "styled-components";

const UserNameBase = styled.div`
  max-width: 8rem;
  `

/** Div which contains Logo svg */
export const StyledUserDropdownName = tw(UserNameBase)`
   truncate
   text-blue-700
    `
