import React from 'react';
import { tsPropertySignature } from '@babel/types';

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
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;