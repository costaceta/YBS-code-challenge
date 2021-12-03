import React from "react";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <ul className="todo__list">
      { todos && todos.map( (todo, index) => (
        <li
        	key={index}
        	className="todo__item"
        	className={"todo__item " + (todo.color.length > 0 ? 'todo__item--' + todo.color : '')}
        >

        	<input
        		id={"todo-" + index}
        		className="todo__checkbox"
        		type="checkbox" name={"todo-" + index}
        		onChange={() => completeTodo(index)}
        	/>
        	<label
        		className="todo__label"
        		className={"todo__label " + (todo.isCompleted ? 'todo__label--completed' : '')}
        		htmlFor={"todo-" + index}
        	>
        		<span className="todo__label--text">
        			{ todo.text }
        		</span>
        	</label>

        	<span
        		className="icon icon--close"
        		onClick={removeTodo}
        	>
        		<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        			<path d="M9.41421 8.50002L15.7782 14.864L14.364 16.2782L8 9.91423L1.63604 16.2782L0.221826 14.864L6.58579 8.50002L0.221826 2.13605L1.63604 0.721841L8 7.0858L14.364 0.721841L15.7782 2.13605L9.41421 8.50002Z" fill="#666666"/>
        		</svg>
        	</span>
        </li>
      )) }
    </ul>
  );
}

export default TodoList;