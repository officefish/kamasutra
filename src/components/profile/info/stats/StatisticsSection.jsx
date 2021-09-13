import StatisticsItem from "./StatisticsItem";
import {v4 as uuid_v4} from "uuid";
import React from "react";
import {StyledStatisticsSection} from "../../../../layout/layout";

const StatisticsSection = () => {

    const stats = [
        { title:'Друга', value: 57, navLink:'/profile' },
        { title:'Подписчиков', value: 207, navLink:'/profile' },
        { title: 'Публикаций', value: 4, navLink:'/profile' },
        { title: 'Фотографий', value: 74, navLink:'/profile' },
        { title: 'Аудиозаписей', value: 1204, navLink:'/profile' }
    ]

    const items = stats
        .map( item => {
            let itemProps = {}
            itemProps.title = item.title
            itemProps.value = item.value
            itemProps.key = uuid_v4()
            if (item.navLink) itemProps.navLink = item.navLink
            return <StatisticsItem {...itemProps}/>
        }  )

    return <StyledStatisticsSection>
        {items}
    </StyledStatisticsSection>
}
export default StatisticsSection