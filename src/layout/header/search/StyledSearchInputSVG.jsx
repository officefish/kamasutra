import tw from 'tailwind-styled-components'

const SVGWrapper = tw.div`
    absolute
    top-0
    h-full
    w-8
    flex
    justify-center
    items-center
    `
const SearchSVG = tw.svg`
    w-4 
    h-4 
    text-gray-400
    `
export const StyledSearchInputSVG = () =>
{
    return <SVGWrapper>
        <SearchSVG xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </SearchSVG>
    </SVGWrapper>
}
