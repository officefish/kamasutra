import DetailsSection from "./DetailsSection";

const BaseInfoSection = () => {
    
    const sectionProps = {}
    sectionProps.navLink = './profile'
    sectionProps.title = 'Образование'
    sectionProps.items = [
        {title:'Родной город', value:'Санкт-Петербург', navLink:'/profile' },
        {title:'Язык', value:'русский', navLink:'/profile' }
    ]

    return <DetailsSection {...sectionProps}/>

}
export default BaseInfoSection