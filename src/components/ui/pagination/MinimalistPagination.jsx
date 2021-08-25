

export const getTotalPages = (itemsPerPage, totalItems) => {
    return Math.ceil( totalItems / itemsPerPage )
}

let MinimalistPagination = (props) => {

    /** Pagination fields */
    const currentPage = props.data.currentPage
    const totalPages = props.data.totalPages
    const minPageValue = props.data.min
    const maxPageValue = props.data.max

    /** SelectController */
    const SelectController = props.onSelect

    /** Controls handlers */
    const onPrevClick = (e) =>
    {
        if (currentPage > minPageValue)
            SelectController(currentPage - 1)
    }
    const onNextClick = (e) =>
    {
        if (currentPage < maxPageValue)
            SelectController(currentPage + 1)
    }

    return <div>
        <button onClick={onPrevClick}>Prev</button>
        <input value={currentPage}/>
        <span>/{totalPages}</span>
        <button onClick={onNextClick}>Next</button>
    </div>
}

export default MinimalistPagination