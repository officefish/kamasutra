import {
    FixedWidthHeaderContainer,
    GlobalHeader, HeaderBar, StyledItems
} from "../../layout/layout";
import LogoItem from "./logo/LogoItem";
import SearchItem from "./search/SearchItem";
import NotificationItem from "./notification/NotificationItem";

const Header = () => {
    return (
        <GlobalHeader >
            <FixedWidthHeaderContainer>
                <HeaderBar>
                    <StyledItems>
                        <LogoItem />
                        <SearchItem />
                        <NotificationItem />
                    </StyledItems>
                </HeaderBar>
            </FixedWidthHeaderContainer>
        </GlobalHeader>
    );
}

export default Header;