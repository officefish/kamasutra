import {
    StyledDetailsSection,
    StyledDetailsSectionHeader,
    StyledDetailsSectionLiner,
    StyledDetailsSectionSpacer,
    StyledDetailsSectionSpacerLiner
} from "../../../../layout/layout";
import InfoItem from "../InfoItem";
import React from "react";
import {v4 as uuid_v4} from 'uuid'
import EditSectionBtn from "./EditSectionBtn";
import {withDropdown} from "../../../../decorators/@withDropdown";

@withDropdown
class DetailsSection extends React.Component {

    constructor(props) {
        super(props);
        this.items = props.items
            .map( item => {
                let itemProps = {}
                itemProps.title = item.title
                itemProps.value = item.value
                itemProps.key = uuid_v4()
                if (item.navLink) itemProps.navLink = item.navLink
                return <InfoItem {...itemProps}/>
            }  )

        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    }

    handleOnMouseOver () {
        const {toggleDropdown, dropdownKey} = this.props
        toggleDropdown && dropdownKey && toggleDropdown(true, dropdownKey)
    }

    handleOnMouseLeave (event) {
        const {toggleDropdown, dropdownKey} = this.props
        toggleDropdown && dropdownKey && toggleDropdown(false, dropdownKey)
    }

    componentDidMount() {
        this.editButtonRef = React.createRef()
    }

    render () {
        const {title, navLink, isDropdown} = this.props
        return <StyledDetailsSection
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
        >
            <StyledDetailsSectionLiner>
                <StyledDetailsSectionHeader>{title}</StyledDetailsSectionHeader>
                <StyledDetailsSectionSpacerLiner>
                    <StyledDetailsSectionSpacer/>
                </StyledDetailsSectionSpacerLiner>
                <EditSectionBtn isDropdown={isDropdown} navLink={navLink} ref={this.editButtonRef} />
            </StyledDetailsSectionLiner>
            {this.items}
        </StyledDetailsSection>
    }

}
export default DetailsSection