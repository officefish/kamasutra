import {StyledStatisticsNavLink, StyledStatisticsNumsLabel} from "../../../../layout/layout";

const StatisticsItem = (props) => {
    const {title, value, navLink} = props
    return  <StyledStatisticsNavLink to={navLink}>
        <StyledStatisticsNumsLabel>{value}</StyledStatisticsNumsLabel>
        <div>{title}</div>
    </StyledStatisticsNavLink>
}
export default StatisticsItem