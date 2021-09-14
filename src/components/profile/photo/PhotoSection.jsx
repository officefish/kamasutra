import {StyledRightColumnSection} from "../../../layout/layout";
import SectionNumsTitle from "../../ui/section/title/SectionNumTitle";

const PhotoSection = () =>
    <StyledRightColumnSection>
        <SectionNumsTitle title='Мои фотографии' numsValue={23} navLink='/profile'/>
        <div className='p-3'>
            <div className='grid grid-cols-4 gap-2'>
                <div className='relative pt-full'>
                    <div className='inset-0 h-full cursor-pointer'>
                        <img className="w-full h-full object-center object-cover" src="https://sun9-38.userapi.com/impg/ddZ360J8Vrj2dOj-0eoIsEG60IyXNsKkhggSjA/nPIwBAJxMXI.jpg?size=200x152&quality=96&sign=833d3ee75ea77a13ebbf650922abc541&type=album" alt=""/>
                    </div>
                </div>
                <div className='relative pt-full'>
                    <div className='inset-0 h-full cursor-pointer'>
                        <img className="w-full h-full object-center object-cover" src="https://sun9-28.userapi.com/impg/Gcywudt1Tmq4YkwQoqTc8PV-zt6wflwhwrbomw/vIoLtzYslns.jpg?size=200x133&quality=96&crop=9,0,681,453&sign=6c9e2d3647847de44002c09858aa01b5&type=album" alt=""/>
                    </div>
                </div>
                <div className='relative pt-full'>
                    <div className='inset-0 h-full cursor-pointer'>
                        <img className="w-full h-full object-center object-cover" src="https://sun9-88.userapi.com/impg/QF5JYWtlqI6chxtyKWm84Wq613HdVKU1u6Fyag/PNRnFTiFiZA.jpg?size=200x153&quality=96&sign=19bab97df67a19742529c5154ccca497&type=album" alt=""/>
                    </div>
                </div>
                <div className='relative pt-full'>
                    <div className='inset-0 h-full cursor-pointer'>
                        <img className="w-full h-full object-center object-cover" src="https://sun9-16.userapi.com/impg/AN1JyqpM347CcrOTJhD8Q0wBvdarZ30gZkrtcQ/0vizkcT3970.jpg?size=200x176&quality=96&sign=7ddc4943e9e962542ce455707d2a50a5&type=album" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </StyledRightColumnSection>
export default PhotoSection