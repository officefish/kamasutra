import React from "react";
import BaseInfoSection from "./details/BaseInfoSection";
import EducationSection from "./details/EducationSection";
import ValuesSection from "./details/ValuesSection";
import InterestsSection from "./details/InterestsSection";
import {accordionComponent} from "../../../decorators/@withAccordion";

@accordionComponent
class DetailsAccordion extends React.Component {

    render () {
        return <div>
            <BaseInfoSection />
            <EducationSection />
            <ValuesSection />
            <InterestsSection />
        </div>
    }
}
export default DetailsAccordion