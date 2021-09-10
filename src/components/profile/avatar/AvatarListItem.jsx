import React from "react";
import StatisticsItem from "./list/StatisticsItem";
import MemoriesItem from "./list/MemoriesItem";
import ArchiveItem from "./list/ArchiveItem";
import MoneyTransfersItem from "./list/MoneyTransfersItem";

const AvatarListItem = () => <ul className='pt-2'>
    <StatisticsItem />
    <MemoriesItem />
    <ArchiveItem />
    <MoneyTransfersItem />
</ul>
export default AvatarListItem