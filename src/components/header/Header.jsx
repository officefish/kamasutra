import {
    FixedWidthHeaderContainer,
    GlobalHeader, HeaderBar
} from "../../layout/layout";
import HeaderBarLeftSideItems from "./HeaderBarLeftSideItems";
import HeaderBarRightSideItems from "./HeaderBarRightSideItems";


const Header = () => {
    return (
        <GlobalHeader >
            <FixedWidthHeaderContainer>
                <HeaderBar>
                   <HeaderBarLeftSideItems />
                   <HeaderBarRightSideItems />
                </HeaderBar>
            </FixedWidthHeaderContainer>
        </GlobalHeader>
    );
}

export default Header;