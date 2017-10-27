import React from 'react';

class TodoItem extends React.Component {
    render() {
      return (
        <li>
          {this.props.text}
            <div className="buttons">
              <button onClick= {() => this.props.removeTodo(this.props.todo)} className="remove">
                <svg xmlns="http://www.w3.org/2000/svg" style={{isolation: 'isolate'}} viewBox="0 -15 40 40" width="22" height="22"><path d="M16-15c-1.046 0-2.118.307-2.876.938-.756.63-1.124 1.522-1.124 2.395V-10H0v3.333h2V20c0 2.742 2.71 5 6 5h24c3.29 0 6-2.258 6-5V-6.667h2V-10H28v-1.667c0-.87-.368-1.765-1.126-2.396C26.12-14.693 25.046-15 24-15h-8zm0 3.333h8V-10h-8v-1.667zm-10 5h28V20c0 .925-.89 1.667-2 1.667H8c-1.11 0-2-.742-2-1.667V-6.667zm4 5v18.334h4V-1.667h-4zm8 0v18.334h4V-1.667h-4zm8 0v18.334h4V-1.667h-4z" fill="#8B8B8B"/></svg>
              </button>
              <button onClick={() => this.props.toggleTodo(this.props.todo)} className="complete">
                <svg xmlns="http://www.w3.org/2000/svg" style={{isolation: 'isolate'}} viewBox="-0.526 -0.526 41.053 41.053" width="22" height="22"><path d="M0 20C0 8.962 8.962 0 20 0s20 8.962 20 20-8.962 20-20 20S0 31.038 0 20z" fill="#FFF" vectorEffect="non-scaling-stroke" strokeWidth="1.053" stroke="#C1311E"/><path d="M31.142 10.09L16.857 24.393 10.96 18.51l-2.974 2.98 8.876 8.855 17.26-17.278-2.98-2.976z" fill="#C1311E"/></svg>
              </button>
            </div>
        </li>
      )
    }
  }

  export default TodoItem