const DetailsButton = () => {
    return <button className='rounded text-left w-full text-blue-700 hover:bg-gray-200 focus:outline-none'>
        <div className='grid grid-cols-3 gap-2 my-2'>
            <div className='col-span-1' />
            <div className='col-span-2'>Подробная информация</div>
        </div>
    </button>
}
export default DetailsButton