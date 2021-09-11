
import DetailsSection from "./DetailsSection";

const InterestsSection = () => {

    const sectionProps = {}
    sectionProps.navLink = './profile'
    sectionProps.title = 'Интересы'
    sectionProps.items = [
        {title:'Любимая книга', value:'Одинокий Волк', navLink:'/profile' },
        {title:'Любимый фильм', value:'Облачный атлас', navLink:'/profile' },
        {title:'Любимое дело', value:'программирование', navLink:'/profile' },
        {title:'Любимая цитата', value:'Моешь посуду, думай о посуде'}
    ]

    return <DetailsSection {...sectionProps}/>
}
export default InterestsSection