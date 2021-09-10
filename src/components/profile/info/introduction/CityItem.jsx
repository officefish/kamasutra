const CityItem = props => {
    return <div className='grid grid-cols-3 gap-2 my-2'>
        <div className='text-gray-500 '>Город:</div>
        <div className='col-span-2'>
            <a className='text-blue-700 hover:underline' href="">{props.city}</a>
        </div>
    </div>
}
export default CityItem