import tw from "tailwind-styled-components";
import styled from "styled-components"

const StyledTrackNameItemBase = styled.div`
    max-width:10rem;
    `

/** Track name item layout setup */
export const StyledTrackNameItem = tw(StyledTrackNameItemBase)`
    text-gray-500 
    truncate
    `