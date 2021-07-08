import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'
import TodoSearchForm from './components/TodoComponents/TodoSearchForm';

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
      userValue: '',
      searchValue: ''
    }
  }

  // Get user input and store it.
  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      userValue: e.target.value
    })
  }

  // Get search input
  handleSearchInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
    this.handleSearch(this.state.searchValue);
  }

  handleSearch = (searchVal) => {
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

  // Clear completed items
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === false;
      })
    })
    console.log(this.state.todos);
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-container">
          <TodoList
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            clearCompleted={this.clearCompleted}
          />
          <div className="forms">
            <TodoForm
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              userValue={this.state.userValue}
            />
            {/* <TodoSearchForm 
              handleSearchInputChange={this.handleSearchInputChange} 
              searchValue={this.state.searchValue}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
