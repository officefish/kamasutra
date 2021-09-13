import NameItem from "./name/NameItem";
import StatusItem from "./name/StatusItem";
import InfoSpacer from "../InfoSpacer";
import CityItem from "./CityItem";
import MarriedItem from "./MarriedItem";

const IntroductionItem = () => {
    return <div>
        <NameItem name="Сергей Иноземцев" online={true} />
        <StatusItem status='Мирный воин' />
        <InfoSpacer />
        <CityItem title='Город' city='Санкт-Петербург' />
        <MarriedItem isMarried={false} />
    </div>
}
export default IntroductionItem