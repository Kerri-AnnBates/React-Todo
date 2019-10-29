import React from 'react';
import Todo from './Todo';
import './Todo.css'

class TodoList extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="todo-list">
                {this.props.todos.map(item => (
                    <Todo 
                        todoItem={item} 
                        key={item.id} 
                        toggleComplete={this.props.toggleComplete} 
                    />
                ))}
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        );
    }
}

export default TodoList;