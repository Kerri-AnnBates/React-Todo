import React from 'react';

class TodoList extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <>
                <h2>From TodoList.js</h2>
                <div className="todo-list">
                    {this.props.todos.map(item => (
                        <li>{item.task}</li>
                    ))}
                </div>
            </>
        );
    }
}

export default TodoList;