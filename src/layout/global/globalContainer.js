import tw from 'tailwind-styled-components'
import styled from 'styled-components'

const ContainerBase = styled.div`
    max-width:970px;
    `
export const GlobalContainer = tw(ContainerBase)`
    container
    mx-auto
    `