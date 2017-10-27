import React from 'react';
import TodoList from './components/todo-list'
import CompletedList from './components/completed-list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[], completed:[], text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} value={this.state.text} type="text" id="addTodoInput" placeholder="Add something to do..."/>
              <button id="add"> <svg xmlns="http://www.w3.org/2000/svg" style={{isolation: 'isolate'}} viewBox="-69 -327 45 45" width="35" height="35"><path d="M-29.156-303.416h-16.26v16.26h-2.168v-16.26h-16.26v-2.168h16.26v-16.26h2.168v16.26h16.26v2.168z" fill="#C1311E"/><path fill="none" d="M-69-327h45v45h-45z"/></svg> </button>
            </form>
            <div className="container">
                <TodoList  todos={this.state.todos} removeTodo ={this.removeTodo} toggleTodo={this.toggleTodo} />
                <CompletedList completed={this.state.completed} removeTodo ={this.removeTodo} toggleTodo={this.toggleTodo}/>
            </div>
          </div>
        )
    }
    handleChange (e) {
    this.setState({text: e.target.value})
    }
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newTodo = {
        text: this.state.text,
        id: Date.now(),
        completed : false
      };
      this.setState(prevState => ({
        todos: prevState.todos.concat(newTodo),
        text: ''
      }));
    }
    removeTodo(todo) {
		this.setState(prevState => {
			const newTodos = todo.completed === false? prevState.todos.slice(): prevState.completed.slice()
			const todoIndex = newTodos.indexOf(todo);
			newTodos.splice(todoIndex, 1);
			return {
        todos: todo.completed === false? newTodos : prevState.todos,
        completed: todo.completed === true? newTodos : prevState.completed
			};
		});
  }
  toggleTodo(todo) {
    this.setState(prevState => {
      const newTodos = todo.completed === false? prevState.todos.slice(): prevState.completed.slice()
			const todoIndex = newTodos.indexOf(todo);
      newTodos.splice(todoIndex, 1);
      todo.completed = !todo.completed
      const targetList = todo.completed ===false? prevState.todos.slice() : prevState.completed.slice()
      targetList.push(todo)
			return {
        todos: todo.completed ===false? targetList : newTodos,
        completed: todo.completed ===true? targetList : newTodos
			}
		});
  }
}

export default App
