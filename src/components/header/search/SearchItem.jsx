import React from "react";
import {SearchWrapper, StyledSearchInput, StyledSearchInputSVG, StyledSearchItemBase} from "../../../layout/layout";

class SearchItem extends React.Component {
    render () {
        return (
            <StyledSearchItemBase>
                <SearchWrapper>
                    <StyledSearchInput
                        type="text"
                        placeholder="Search"/>
                    <StyledSearchInputSVG />
                </SearchWrapper>
            </StyledSearchItemBase>
        )
    }
}
export default SearchItem