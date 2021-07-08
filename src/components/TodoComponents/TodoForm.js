import React from 'react';
import './Todo.css';


const TodoForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="add-item">
                Add Item:
                <input 
                    type="text" 
                    id="add-item"
                    placeholder="Add Item"
                    onChange={props.handleInputChange}
                    value={props.userValue}
                />
            </label>
            <button>Add Item</button>
        </form>
    )
}

export default TodoForm;