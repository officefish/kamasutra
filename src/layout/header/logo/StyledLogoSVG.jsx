import tw from 'tailwind-styled-components'

/** Div which contains Logo svg */
const StyledLogoSVGBase = tw.svg`
   h-6
    `
export const StyledLogoSVG = () => {
    return <StyledLogoSVGBase
        fill="none"
        viewBox="0 0 274 48"
        xmlns="http://www.w3.org/2000/svg"
    ><path d="m0 23c0-10.8423 0-16.26346 3.36827-19.63173s8.78943-3.36827 19.63173-3.36827h2c10.8423 0 16.2635 0 19.6317 3.36827 3.3683 3.36827 3.3683 8.78943 3.3683 19.63173v2c0 10.8423 0 16.2635-3.3683 19.6317-3.3682 3.3683-8.7894 3.3683-19.6317 3.3683h-2c-10.8423 0-16.26346 0-19.63173-3.3683-3.36827-3.3682-3.36827-8.7894-3.36827-19.6317z" fill="#2787f5"/><path clipRule="evenodd" d="m13.0009 15h-3.5008c-1.00024 0-1.2003.4708-1.2003.9898 0 .9271 1.18686 5.525 5.5262 11.6061 2.8929 4.1529 6.9687 6.4041 10.6776 6.4041 2.2253 0 2.5006-.5 2.5006-1.3612v-3.1388c0-1 .2108-1.1996.9154-1.1996.5193 0 1.4094.2596 3.4864 2.2619 2.3737 2.3731 2.765 3.4377 4.1001 3.4377h3.5008c1.0003 0 1.5004-.5 1.2119-1.4867-.3157-.9834-1.449-2.4103-2.9528-4.1016-.816-.9641-2.0399-2.0023-2.4108-2.5215-.5192-.6674-.3709-.9641 0-1.5573 0 0 4.2652-6.007 4.7103-8.0463.2225-.7417 0-1.2866-1.0587-1.2866h-3.5008c-.8901 0-1.3005.4708-1.5231.9898 0 0-1.7802 4.3384-4.3022 7.1565-.816.8157-1.1869 1.0753-1.632 1.0753-.2225 0-.5446-.2596-.5446-1.0011v-6.9339c0-.89-.2583-1.2866-1.0002-1.2866h-5.5013c-.5562 0-.8908.413-.8908.8045 0 .8436 1.261 1.0382 1.391 3.4113v5.1542c0 1.13-.2042 1.3349-.6492 1.3349-1.1868 0-4.0737-4.3578-5.7859-9.3442-.3355-.9692-.6721-1.3607-1.5668-1.3607z" fill="#fff" fillRule="evenodd"/><g fill="#000"><path d="m81.8929 23.5791c1.9035-.8883 3.1302-2.3688 3.1302-4.653 0-3.4686-3.1725-5.922-7.7409-5.922h-10.5327v21.996h10.998c4.7376 0 8.037-2.5803 8.037-6.0912 0-2.6649-1.7343-4.653-3.8916-5.3298zm-10.2789-6.5565h5.6682c1.692 0 2.8764 1.0152 2.8764 2.4111s-1.1844 2.3688-2.8764 2.3688h-5.6682zm6.1335 13.959h-6.1335v-5.3721h6.1335c1.9035 0 3.1725 1.0998 3.1725 2.7072s-1.269 2.6649-3.1725 2.6649z"/><path d="m103.876 35.0001h6.387l-10.11-11.421 9.264-10.575h-5.795l-7.3603 8.5446h-1.1844v-8.5446h-4.8645v21.996h4.8645v-8.7561h1.1844z"/><path d="m122.679 35.4231c6.895 0 11.76-4.7376 11.76-11.421s-4.865-11.421-11.76-11.421-11.759 4.7376-11.759 11.421 4.864 11.421 11.759 11.421zm0-4.4415c-3.976 0-6.683-2.8341-6.683-6.9795s2.707-6.9795 6.683-6.9795c3.977 0 6.684 2.8341 6.684 6.9795s-2.707 6.9795-6.684 6.9795z"/><path d="m153.388 13.0041v8.6715h-9.856v-8.6715h-4.864v21.996h4.864v-8.883h9.856v8.883h4.865v-21.996z"/><path d="m169.241 35.0001h4.865v-17.5545h7.614v-4.4415h-20.093v4.4415h7.614z"/><path d="m193.24 12.5811c-4.272 0-8.037 2.1996-9.137 6.0066l4.484.7614c.677-1.3536 2.2-2.6226 4.399-2.6226 2.665 0 4.23 1.9035 4.442 4.7799h-4.738c-6.472 0-9.687 2.8341-9.687 6.8949 0 4.1031 3.173 7.0218 7.657 7.0218 3.595 0 6.006-2.0727 7.064-3.8916l1.015 3.4686h3.596v-12.3516c0-6.3873-3.469-10.0674-9.095-10.0674zm-1.438 18.7389c-2.369 0-3.892-1.2267-3.892-3.1302 0-1.692 1.227-2.8764 4.949-2.8764h4.611c0 3.5955-2.284 6.0066-5.668 6.0066z"/><path d="m221.275 35.0001h6.387l-10.11-11.421 9.264-10.575h-5.795l-7.36 8.5446h-1.185v-8.5446h-4.864v21.996h4.864v-8.7561h1.185z"/><path d="m235.913 35.0001h4.865v-17.5545h7.614v-4.4415h-20.093v4.4415h7.614z"/><path d="m272.518 23.7483c0-6.345-4.738-11.1672-11.421-11.1672-6.684 0-11.421 4.7799-11.421 11.421s4.737 11.421 11.421 11.421c4.568 0 8.883-2.1573 10.532-6.345l-4.568-.7614c-1.058 1.5651-3.088 2.6649-5.668 2.6649-3.723 0-6.176-2.2842-6.641-5.6682h17.681c.042-.4653.085-.9729.085-1.5651zm-11.421-6.9372c3.045 0 5.329 1.9458 6.133 4.6953h-12.182c.803-2.8341 3.088-4.6953 6.049-4.6953z"/></g>
    </StyledLogoSVGBase>
}