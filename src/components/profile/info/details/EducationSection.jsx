import DetailsSection from "./DetailsSection";

const EducationSection = () => {
    const sectionProps = {}
    sectionProps.navLink = './profile'
    sectionProps.title = 'Образование'
    sectionProps.items = [
        {title:'Университет', value:'СПбГИК', navLink:'/profile' },
        {title:'Факультет', value:'Режиссуры и продюсерского мастерства', navLink:'/profile' }
    ]
    return <DetailsSection {...sectionProps}/>
}
export default EducationSection