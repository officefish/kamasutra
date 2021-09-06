import tw from 'tailwind-styled-components'

const RemoveAvatarSVGBase = tw.svg`
    h-3
    w-3
    `
export const RemoveAvatarSVG = () => <RemoveAvatarSVGBase
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
</RemoveAvatarSVGBase>