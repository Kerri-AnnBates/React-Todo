import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      userValue: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
