
const NameItem = props => {
    return <div className='flex items-center justify-between'>
        <div className='text-xl'>{props.name}</div>
        <div className='text-gray-500 text-sm'>{ props.online ? 'На связи' : 'Не на связи'}</div>
    </div>
}
export default NameItem