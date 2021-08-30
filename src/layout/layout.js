import tw from "tailwind-styled-components";
import styled, {createGlobalStyle} from "styled-components"

/** Body setup */
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    font-family: ${props => props.theme.fontFamily};
    background-size: cover;
  }
`
