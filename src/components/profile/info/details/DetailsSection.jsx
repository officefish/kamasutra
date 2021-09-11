import {
    StyledDetailsSection,
    StyledDetailsSectionHeader,
    StyledDetailsSectionLiner,
    StyledDetailsSectionSpacer,
    StyledDetailsSectionSpacerLiner,
    StyledEditDetailsSectionBtn,
    StyledEditDetailsSectionNavLink
} from "../../../../layout/layout";
import InfoItem from "../InfoItem";
import React from "react";
import {v4 as uuidv4} from 'uuid'

const DetailsSection = (props) => {

    const items = props.items
        .map( item => {
            let itemProps = {}
            itemProps.title = item.title
            itemProps.value = item.value
            itemProps.key = uuidv4()
            if (item.navLink) itemProps.navLink = item.navLink
            return <InfoItem {...itemProps}/>
        }  )

    return <StyledDetailsSection>
        <StyledDetailsSectionLiner>
            <StyledDetailsSectionHeader>{props.title}</StyledDetailsSectionHeader>
            <StyledDetailsSectionSpacerLiner>
                <StyledDetailsSectionSpacer/>
            </StyledDetailsSectionSpacerLiner>
            <StyledEditDetailsSectionBtn>
                <StyledEditDetailsSectionNavLink to={props.navLink}>Корректировать</StyledEditDetailsSectionNavLink>
            </StyledEditDetailsSectionBtn>
        </StyledDetailsSectionLiner>
        {items}
    </StyledDetailsSection>
}
export default DetailsSection