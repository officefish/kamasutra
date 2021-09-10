import  {createGlobalStyle} from "styled-components"
import tw from "tailwind-styled-components";


/** Body setup */
export const GlobalStyle = createGlobalStyle`
  body {
    ${tw`min-h-screen bg-gray-100 text-sm`}
  }
  `


/*
styled.div.attrs({
  className: "w-full h-screen bg-gray-100 p-2"
})``;
 */