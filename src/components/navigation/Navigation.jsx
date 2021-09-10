import {
    GlobalNavigation,
    NavigationLiner, NavigationSpacer,
} from "../../layout/layout";
import MyPageItem from "./items/MyPageItem";
import NewsItem from "./items/NewsItem";
import MessengerItem from "./items/MessengerItem";
import CommunityItem from "./items/CommunityItem";
import GamesItem from "./items/GamesItem";
import AdvancedNavigation from "./advanced/AdvancedNavigation";

const Navigation = () => {
    return <NavigationLiner>
                <GlobalNavigation >
                    <MyPageItem />
                    <NewsItem />
                    <MessengerItem />
                    <CommunityItem />
                    <GamesItem />
                </GlobalNavigation>
                <NavigationSpacer />
                <AdvancedNavigation />
            </NavigationLiner>
}
export default Navigation
