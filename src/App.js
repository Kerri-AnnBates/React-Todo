import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    const data = [
      {
        task: 'Organize Garage',
        id: 123,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 12,
        completed: false
      }
    ]

    this.state = {
      todos: data,
      userValue: ''
    }
  }

  // Get user input and store it.
  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      userValue: e.target.value
    })
  }

  // Submit a new todo item.
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('you submitted something');
    this.addItem(this.state.userValue);
    this.setState({
      userValue: ''
    });
  }

  // Add an item
  addItem = (todoTitle) => {
    const newTodo = {
      task: todoTitle,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // Toggle completed status for todo.
  toggleComplete = (id) => {
    
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          userValue={this.state.userValue}
        />
      </div>
    );
  }
}

export default App;
