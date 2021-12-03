import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const Todo = () => {
		const [todos, setTodos] = useState([
			{
				text: "Buy bread",
				isCompleted: false,
				color: ''
			},
			{
				text: "Buy toasts",
				isCompleted: false,
				color: "purple"
			},
			{
				text: "Buy toasts",
				isCompleted: false,
				color: "green"
			},
			{
				text: "Buy toasts",
				isCompleted: false,
				color: "red"
			},
		]);

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

			setTodoText("");
			setSelectedColor("");
			setIsEditing(false);
			setdropdownIsOpen(false);
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

					{/* <div className="todo__header">
						<h2 className="todo__title">To Do</h2>

						<div className="todo__actions">
							<div className="todo__actions_group">
								{ !isEditing ?
									<button onClick={addTodo} className="todo__add-button">
										<div className="icon icon--plus">
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#666666"/>
											</svg>
										</div>
										Add new item
									</button>
								:
									<>
										<div
											className={"dropdown " + (dropdownIsOpen ? 'dropdown--open' : '')}
										>
											<button className="dropdown__button" type="button">
												<span
													className={"dropdown__color " + (selectedColor ? 'dropdown__color--' + selectedColor : '')}
												></span>

												<span
													className="icon icon--arrow"
													onClick={toggleDropdown}
												>
													<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.2542 0.254211L11.0792 1.07917L6.00004 6.15832L0.920898 1.07917L1.74586 0.254211L6.00004 4.5084L10.2542 0.254211Z" fill="#666666"/>
													</svg>
												</span>
											</button>

											{ dropdownIsOpen &&
												<div className="dropdown__menu">
													{ colorList.map( color => (
														<span
															className={"dropdown__color dropdown__color--big " + (color ? 'dropdown__color--' + color : '')}
															color={color}
															onClick={() => changeColor(color)}
														></span>
													)) }
												</div>
											}
										</div>

										<div className="form">
											<form onSubmit={handleSubmit}>
												<input
													className="form__input"
													type="text"
													value={todoText}
													placeholder="Buy something"
													onChange={handleChange}
													autoFocus
												/>
											</form>
										</div>
									</>
								}
							</div>
						</div>
					</div> */}

					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						completeTodo={completeTodo}
					/>
					{/* <ul className="todo__list">
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
					</ul> */}
				</div>
			</div>
    );
}
export default Todo;