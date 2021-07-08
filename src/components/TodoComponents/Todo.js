import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div 
                className={`todo-item ${this.props.todoItem.completed ? 'completed' : ''}`} 
                onClick={(e) => this.props.toggleComplete(this.props.todoItem.id)}
            >
                <p>{this.props.todoItem.task}</p>
            </div>
        )
    }
}

export default Todo;