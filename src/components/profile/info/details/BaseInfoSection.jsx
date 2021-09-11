import CityItem from "../introduction/CityItem";
import LanguageItem from "./LanguageItem";
import {
    StyledDetailsSection,
    StyledDetailsSectionHeader,
    StyledDetailsSectionLiner,
    StyledDetailsSectionSpacer,
    StyledDetailsSectionSpacerLiner,
    StyledEditDetailsSectionBtn,
    StyledEditDetailsSectionNavLink
} from "../../../../layout/layout";

const BaseInfoSection = () => {
    return <StyledDetailsSection>
        <StyledDetailsSectionLiner>
            <StyledDetailsSectionHeader>Основная информация</StyledDetailsSectionHeader>
            <StyledDetailsSectionSpacerLiner>
                <StyledDetailsSectionSpacer/>
            </StyledDetailsSectionSpacerLiner>
            <StyledEditDetailsSectionBtn>
                <StyledEditDetailsSectionNavLink to='/profile'>Корректировать</StyledEditDetailsSectionNavLink>
            </StyledEditDetailsSectionBtn>
        </StyledDetailsSectionLiner>
        <CityItem title='Родной город' city='Санкт-Петербург' />
        <LanguageItem title='Язык' language='русский' />
    </StyledDetailsSection>
}
export default BaseInfoSection