import {
    StyledColumnSectionLiner,
    StyledRightColumnSection
} from "../../../layout/layout";
import NameItem from "./name/NameItem";
import StatusItem from "./name/StatusItem";
import InfoSpacer from "./InfoSpacer";
import CityItem from "./introduction/CityItem";
import MarriedItem from "./introduction/MarriedItem";
import DetailsButton from "./details/DetailsButton";
import BaseInfoSection from "./details/BaseInfoSection";
import EducationSection from "./details/EducationSection";
import ValuesSection from "./details/ValuesSection";
import InterestsSection from "./details/InterestsSection";

const InfoSection = () =>
    <StyledRightColumnSection>
        <StyledColumnSectionLiner>
            <NameItem name="Сергей Иноземцев" online={true} />
            <StatusItem status='Мирный воин' />
            <InfoSpacer />
            <CityItem title='Город' city='Санкт-Петербург' />
            <MarriedItem isMarried={false} />
            <DetailsButton />
            <div>
               <BaseInfoSection />
               <EducationSection />
               <ValuesSection />
               <InterestsSection />
            </div>
        </StyledColumnSectionLiner>
    </StyledRightColumnSection>
export default InfoSection