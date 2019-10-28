import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            // <h2>from todo.js</h2>
            <>
            <li>{this.props.todoItem.task}</li>
            </>
        )
    }
}

export default Todo;