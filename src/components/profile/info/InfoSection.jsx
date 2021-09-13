import React from "react";
import {
    StyledColumnSectionLiner,
    StyledRightColumnSection
} from "../../../layout/layout";

import DetailsButton from "./details/DetailsButton";
import IntroductionItem from "./introduction/IntroductionItem";
import {withAccordion} from "../../../decorators/@withAccordion";
import DetailsAccordion from "./DetailsAccordion";
import StatisticsSection from "./stats/StatisticsSection";

@withAccordion
class InfoSection extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick () {
        const {toggleAccordion, accordionKey} = this.props
        toggleAccordion && accordionKey && toggleAccordion(accordionKey)
    }

    render () {

       const {isAccordion} = this.props

        const btnValue = isAccordion
            ? 'Скрыть подробную информацию'
            : 'Подробная информация'

       return  <StyledRightColumnSection>
           <StyledColumnSectionLiner>
               <IntroductionItem />
               <DetailsButton onClick={this.handleOnClick} value={btnValue} />
               <DetailsAccordion isAccordion={isAccordion} />
           </StyledColumnSectionLiner>
           <StatisticsSection />
       </StyledRightColumnSection>
    }
}
export default InfoSection