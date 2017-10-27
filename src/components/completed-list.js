import React from 'react';
import TodoItem from './todo-item';

class CompletedList extends React.Component {
    render() {
      return (
          <ul className="todo" id="completedList">
              {this.props.completed.map(todo => {
                return (
                  <TodoItem removeTodo={this.props.removeTodo}  toggleTodo={this.props.toggleTodo} key={todo.id} text={todo.text} todo={todo} />
                )
              })}
          </ul>
      )
    }
  }

  export default CompletedList