import {StyledRightColumnSection} from "../../../layout/layout";
import NameItem from "./name/NameItem";
import StatusItem from "./name/StatusItem";
import InfoSpacer from "./InfoSpacer";
import CityItem from "./introduction/CityItem";
import MarriedItem from "./introduction/MarriedItem";
import DetailsButton from "./details/DetailsButton";

const InfoSection = () =>
    <StyledRightColumnSection>
        <div className='p-4'>
            <NameItem name="Сергей Иноземцев" online={true} />
            <StatusItem status='Мирный воин' />
            <InfoSpacer />
            <CityItem city='Санкт-Петербург' />
            <MarriedItem isMarried={false} />
            <DetailsButton />
        </div>
    </StyledRightColumnSection>
export default InfoSection