import React from 'react';

const Todo = () => {
    return (
      <div className="todo">
				<div className="todo__wrapper">
					<div className="todo__top">
						<h2 className="todo__title">To Do</h2>
						<button className="todo__add-button">
							 + Add new item
						</button>
					</div>

					<ul className="todo__list">
						<li className="todo__item">
							<input className="todo__checkbox" type="checkbox" name="todo" />
							<label className="todo__label" for="todo">Buy bread</label>
						</li>
						<li className="todo__item">
							<input className="todo__checkbox" type="checkbox" name="todo" />
							<label className="todo__label" for="todo">Buy toasts</label>
						</li>
						<li className="todo__item">
							<input className="todo__checkbox" type="checkbox" name="todo" />
							<label className="todo__label" for="todo">Buy milk</label>
						</li>
					</ul>
				</div>
			</div>
    );
}
export default Todo;