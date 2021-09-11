import {
    StyledDetailsSection,
    StyledDetailsSectionHeader,
    StyledDetailsSectionLiner,
    StyledDetailsSectionSpacer,
    StyledDetailsSectionSpacerLiner,
    StyledEditDetailsSectionBtn,
    StyledEditDetailsSectionNavLink
} from "../../../../layout/layout";
import InfoItem from "../InfoItem";

const InterestsSection = () => {
    return <StyledDetailsSection>
        <StyledDetailsSectionLiner>
            <StyledDetailsSectionHeader>Интересы</StyledDetailsSectionHeader>
            <StyledDetailsSectionSpacerLiner>
                <StyledDetailsSectionSpacer/>
            </StyledDetailsSectionSpacerLiner>
            <StyledEditDetailsSectionBtn>
                <StyledEditDetailsSectionNavLink to='/profile'>Корректировать</StyledEditDetailsSectionNavLink>
            </StyledEditDetailsSectionBtn>
        </StyledDetailsSectionLiner>
        <InfoItem title='Любимая книга' value='Одинокий Волк' navLink='/profile' />
        <InfoItem title='Любимый фильм' value='Облачный атлас' navLink='/profile' />
        <InfoItem title='Любимое дело' value='программирование' navLink='/profile' />
        <InfoItem title='Любимая цитата' value='Моешь посуду, думай о посуде' />
    </StyledDetailsSection>
}
export default InterestsSection