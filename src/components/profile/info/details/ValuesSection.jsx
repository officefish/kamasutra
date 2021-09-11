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

const ValuesSection = () => {
    return <StyledDetailsSection>
        <StyledDetailsSectionLiner>
            <StyledDetailsSectionHeader>Убеждения</StyledDetailsSectionHeader>
            <StyledDetailsSectionSpacerLiner>
                <StyledDetailsSectionSpacer/>
            </StyledDetailsSectionSpacerLiner>
            <StyledEditDetailsSectionBtn>
                <StyledEditDetailsSectionNavLink to='/profile'>Корректировать</StyledEditDetailsSectionNavLink>
            </StyledEditDetailsSectionBtn>
        </StyledDetailsSectionLiner>
        <InfoItem title='Полит.взгляды' value='Либертарианские' navLink='/profile' />
        <InfoItem title='Главное в жизни' value='Холодный расчет' navLink='/profile' />
        <InfoItem title='Главное в людях' value='Горячие сердца' navLink='/profile' />
        <InfoItem title='Вдохновляет' value='Естествознание' navLink='/profile' />
    </StyledDetailsSection>
}
export default ValuesSection