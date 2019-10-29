import React from 'react';
import './Todo.css';


const TodoSearchForm = (props) => {

    return (
        <form>
            <label htmlFor="search-item">
                Search Item:
                <input
                    type="text"
                    id="search-item"
                    placeholder="Search Todo"
                    onChange={props.handleSearchInputChange}
                    value={props.searchValue}
                />
            </label>
        </form>
    )
}

export default TodoSearchForm;