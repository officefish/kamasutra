import {StyledAdvancedNavigation} from "../../../layout/layout";
import BlogItem from "./items/BlogItem";
import DevelopersItem from "./items/DevelopersItem";
import AdvertisingItem from "./items/AdvertisingItem";
import OtherItem from "./items/OtherItem";

const AdvancedNavigation = () => {
    return  <StyledAdvancedNavigation>
        <BlogItem />
        <DevelopersItem />
        <AdvertisingItem />
        <OtherItem />
    </StyledAdvancedNavigation>
}
export default AdvancedNavigation