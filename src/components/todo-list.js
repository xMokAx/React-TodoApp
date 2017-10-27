import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {
    render() {
      return (
           <ul className="todo" id="todoList">
              {this.props.todos.map(todo => {
                return (
                 <TodoItem removeTodo={this.props.removeTodo}  toggleTodo={this.props.toggleTodo} key={todo.id} text={todo.text} todo={todo} />
                )}
              )}
           </ul>
      );
    }
  }

  export default TodoList