import {
    GlobalNavigation,
    NavigationLiner,
} from "../../layout/layout";
import MyPageItem from "./items/MyPageItem";
import NewsItem from "./items/NewsItem";
import MessengerItem from "./items/MessengerItem";
import CommunityItem from "./items/CommunityItem";
import GamesItem from "./items/GamesItem";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return <NavigationLiner>
            <GlobalNavigation >
                <MyPageItem />
                <NewsItem />
                <MessengerItem />
                <CommunityItem />
                <GamesItem />
            </GlobalNavigation>
            <div className='bg-gray-300 h-px mx-2 my-1'/>
            <ul className='flex flex-wrap pl-3 py-1'>
                <li className='block text-gray-500 text-xs hover:underline pr-4 my-0.5'>
                    <NavLink to='/#'>
                        Блог
                    </NavLink>
                </li>
                <li className='block text-gray-500 text-xs hover:underline pr-4 my-0.5'>
                    <NavLink to='/#'>
                        Разработчики
                    </NavLink>
                </li>
                <li className='block text-gray-500 text-xs hover:underline pr-4 my-0.5'>
                    <NavLink to='/#'>
                        Реклама
                    </NavLink>
                </li>
                <li className='block text-gray-500 text-xs hover:underline pr-4 my-0.5'>
                    <button type="button" className='flex items-center h-full'>
                        <label className='hover:underline cursor-pointer'>Еще</label>
                        <svg className='w-4 h-4 pt-1' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </li>
            </ul>
            </NavigationLiner>
}
export default Navigation
