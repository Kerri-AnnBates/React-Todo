import React from 'react';

const TodoForm = () => {
    return (
        <form>
            <label htmlFor="add-item">
                Add Item:
                <input type="text" id="add-item" />
            </label>
            <button>Add Item</button>
        </form>
    )
}

export default TodoForm;