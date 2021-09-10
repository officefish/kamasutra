import React from "react";

class MinimalistPagination extends React.Component {

    constructor(props) {
        super(props);

        /** Pagination fields */
        this.currentPage = props.data.currentPage
        this.minPage = props.data.min
        this.maxPage = props.data.max

        /** SelectController */
        this.SelectController = props.onSelect

        /** PossibleInputController */
        this.PreviewInputController = props.onInputPreview

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    /** Controls handlers */
    onPrevClick = () =>
    {
        if (this.currentPage > this.minPage)
            this.SelectController(this.currentPage - 1)
    }
    onNextClick = () =>
    {
        if (this.currentPage < this.maxPage)
            this.SelectController(this.currentPage + 1)
    }

    /** Input change listeners */
    handleChange = (e) =>
    {
        this.PreviewInputController(e.target.value)
    }

    handleSubmit = (e) =>
    {
        console.log ('handleSubmit')

        // const InputValidator = new Validator({
        //     value:e.target.value
        // },{
        //     value:['required', 'integer', { 'min': this.minPage }, {'max': this.maxPage}, {'not_in':[this.currentPage]}]
        // })
        //
        // /** Input validator listeners */
        // const onValidInput = () => {
        //     //this.PreviewInputController(this.props.possiblePage)
        //     this.SelectController (e.target.value)
        // }
        // const onFailsInput = () => {
        //     this.PreviewInputController(this.props.currentPage)
        // }
        //
        // /** Input Validator */
        // InputValidator.passes(onValidInput)
        // InputValidator.fails(onFailsInput)
        //
        // e.preventDefault();
    }

    render () {
        return <div>
            <button onClick={this.onPrevClick}>Prev</button>
            <input onChange={this.handleChange} onBlur={this.handleSubmit} value={this.props.data.possiblePage}/>
            <span>/{this.props.data.totalPages}</span>
            <button onClick={this.onNextClick}>Next</button>
        </div>
    }

}
export default MinimalistPagination