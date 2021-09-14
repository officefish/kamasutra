import React from "react";
import FriendGridItem from "./FriendGridItem";
import {StyledFriendsGrid} from "../../../../layout/layout";

class FriendsGrid extends React.Component {

    constructor(props) {
        super(props);

        this.data = [
            {name:'I-N', src:'https://sun9-35.userapi.com/c5227/u1096385/e_dc26f586.jpg', id:1},
            {name:'Ксения Костина', src:'https://sun9-31.userapi.com/s/v1/if1/vTsgz8R5AGHM197dtn2ybaLkNNnCYUAoWRRrHnIbeYdoOgtl6eA9ecYVTIhma0JVWfZQvx-G.jpg?size=50x50&quality=96&crop=57,0,720,720&ava=1', id:2},
            {name:'Артем Цыганов', src:'https://sun9-87.userapi.com/s/v1/ig2/w4i3Ujbbbdv0jny5r9QGpb3rdv26woIs1iTL4ptFUKJn9DnKH6USg8A_tO-pMPb3Nh8VkgotpXneEKWqEEKm0Im9.jpg?size=50x50&quality=96&crop=179,55,1338,1338&ava=1', id:3},
            {name:'Верунька Беликова', src:'https://sun9-76.userapi.com/s/v1/if1/GJZMWTd9K75TT6yW-cXgr4Utwe4h_Z9d0mBDqrB8pSga6qeiSaDHi9t23AhZUOte_EwiYCI9.jpg?size=50x50&quality=96&crop=0,85,731,731&ava=1', id:4},
            {name:'Семен Хазам', src:'https://sun9-65.userapi.com/s/v1/ig2/Ibmol-GlAIdylPVNl7NDMi0IiRg0JXS2xbT16LZqUN6cli5lzHfXPtOnRu5I24TCmA-TkyIEqqHp3Bog0QFFmJP4.jpg?size=50x50&quality=95&crop=0,0,1374,1374&ava=1', id:5},
            {name:'Вспышка Справа', src:'https://sun9-16.userapi.com/s/v1/ig2/kamWaXrGauZLfLMfZ9FQm8qlBOLRn2vlVI1fnUigVW8InzbSlUardB43KyQ9hQuUh0xoSRTIVsD7EWdzhgbbIWjK.jpg?size=50x50&quality=96&crop=0,0,828,828&ava=1', id:6},
        ]
    }

     render () {
         let friends = this.data
             .map( friend => <FriendGridItem name={friend.name} src={friend.src} id={friend.id} key={friend.id} /> )
         return <StyledFriendsGrid>{friends}</StyledFriendsGrid>
     }

}
export default FriendsGrid