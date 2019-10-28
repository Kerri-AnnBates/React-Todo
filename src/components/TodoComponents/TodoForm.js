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
                    onChange={props.handleInputChange}
                    value={props.userValue}
                />
            </label>
            <button>Add Item</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;