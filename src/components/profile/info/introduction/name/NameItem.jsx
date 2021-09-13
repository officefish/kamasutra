import {StyledNameItemLabel, StyledNameItemLiner, StyledOnlineStatusLabel} from "../../../../../layout/layout";

const NameItem = props => {
    return <StyledNameItemLiner>
        <StyledNameItemLabel>{props.name}</StyledNameItemLabel>
        <StyledOnlineStatusLabel>{ props.online ? 'На связи' : 'Не на связи'}</StyledOnlineStatusLabel>
    </StyledNameItemLiner>
}
export default NameItem
