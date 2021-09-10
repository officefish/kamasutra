import tw from 'tailwind-styled-components'
import styled from 'styled-components'
import { css } from 'styled-components';

//import {GlobalContainer, GlobalDisplay} from "../layout";

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