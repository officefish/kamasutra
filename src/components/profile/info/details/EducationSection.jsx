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

const EducationSection = () => {
    return <StyledDetailsSection>
        <StyledDetailsSectionLiner>
            <StyledDetailsSectionHeader>Образование</StyledDetailsSectionHeader>
            <StyledDetailsSectionSpacerLiner>
                <StyledDetailsSectionSpacer/>
            </StyledDetailsSectionSpacerLiner>
            <StyledEditDetailsSectionBtn>
                <StyledEditDetailsSectionNavLink to='/profile'>Корректировать</StyledEditDetailsSectionNavLink>
            </StyledEditDetailsSectionBtn>
        </StyledDetailsSectionLiner>
        <InfoItem title='Университет' value='СПбГИК' navLink='/profile' />
        <InfoItem title='Факультет' value='Режиссуры и продюсерского мастерства' navLink='/profile' />
    </StyledDetailsSection>
}
export default EducationSection