import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div 
                className="todo-item" 
                onClick={(e) => this.props.toggleComplete(this.props.todoItem.id)}
            >
                <p>{this.props.todoItem.task}</p>
            </div>
        )
    }
}

export default Todo;