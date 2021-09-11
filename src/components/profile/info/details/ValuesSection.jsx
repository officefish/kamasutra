
import DetailsSection from "./DetailsSection";

const ValuesSection = () => {
    const sectionProps = {}
    sectionProps.navLink = './profile'
    sectionProps.title = 'Убеждения'
    sectionProps.items = [
        {title:'Полит.взгляды', value:'Либертарианские', navLink:'/profile' },
        {title:'Главное в жизни', value:'Холодный расчет', navLink:'/profile' },
        {title:'Главное в людях', value:'Горячие сердца', navLink:'/profile' },
        {title:'Вдохновляет', value:'Естествознание', navLink:'/profile'}
    ]

    return <DetailsSection {...sectionProps}/>
}
export default ValuesSection