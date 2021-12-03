import React, { useState } from 'react';
import { resetDefaultState } from '../utils/Utils';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const Todo = () => {
		const [todos, setTodos] = useState([]);

		const [todoText, setTodoText] = useState("");
		const [selectedColor, setSelectedColor] = useState('');
		const [isEditing, setIsEditing] = useState(false);
		const [dropdownIsOpen, setdropdownIsOpen] = useState(false);

		const addTodo = () => {
			setIsEditing(true);
		}

		const handleSubmit = (event) => {
			event.preventDefault();

			// Todo: Improve this validation
			if(!todoText) {
				alert('Please type a text!');
				return;
			}

			const newTodo = {
				text: todoText,
				isCompleted: false,
				color: selectedColor
			}

			setTodos([ ...todos,	newTodo	]);

			resetDefaultState(setTodoText, setSelectedColor, setIsEditing, setdropdownIsOpen);
		}

		const handleChange = (event) => {
			setTodoText(event.target.value);
		}

		const toggleDropdown = () => {
			setdropdownIsOpen(!dropdownIsOpen);
		}

		const completeTodo = index => {
			let newTodos = [...todos];
		  let currentIsCompleted = newTodos[index].isCompleted;
			newTodos[index].isCompleted = !currentIsCompleted;

			setTodos(newTodos);
		}

		const removeTodo = index => {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
		};

		const changeColor = color => {
			setSelectedColor(color);
		}

    return (
			<div className="todo">
				<div className="todo__wrapper">
					<TodoHeader
						addTodo={addTodo}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						isEditing={isEditing}
						dropdownIsOpen={dropdownIsOpen}
						selectedColor={selectedColor}
						todoText={todoText}
						toggleDropdown={toggleDropdown}
						changeColor={changeColor}
					/>

					{ todos.length > 0 ?
						<TodoList
							todos={todos}
							removeTodo={removeTodo}
							completeTodo={completeTodo}
						/>
					:
						<p className="todo__empty">Create your first "Todo"</p>
					}

				</div>
			</div>
    );
}
export default Todo;