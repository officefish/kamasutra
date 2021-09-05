import {NavLink} from "react-router-dom";
import {AvatarListItemLiner, AvatarListItemSpan, MoneyTransfersSVG} from "../../../../layout/layout";

const MoneyTransfersItem = () => <li>
    <NavLink to='/#'>
        <AvatarListItemLiner>
            <MoneyTransfersSVG />
            <AvatarListItemSpan>Денежные переводы</AvatarListItemSpan>
        </AvatarListItemLiner>
    </NavLink>
</li>
export default MoneyTransfersItem