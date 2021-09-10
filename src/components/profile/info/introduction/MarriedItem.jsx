const MarriedItem = props => {
    return <div className='grid grid-cols-3 gap-2 my-2'>
        <div className='text-gray-500'>Личные отношения:</div>
        <div className='col-span-2'>
            <a className='text-blue-700 hover:underline' href="">{props.isMarried ? 'женат' : 'не женат'}</a>
        </div>
    </div>
}
export default MarriedItem