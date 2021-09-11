import InfoItem from "../InfoItem";

const CityItem = props => {
    return <InfoItem navLink='/profile' title={props.title} value={props.city} />
}
export default CityItem