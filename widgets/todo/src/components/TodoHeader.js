import React from "react";

const TodoHeader = ({
  addTodo,
  handleSubmit,
  handleChange,
  dropdownIsOpen,
  isEditing,
  selectedColor,
  toggleDropdown,
  changeColor,
  todoText
}) => {

  const colorList = [
    "blue",
    "purple",
    "green",
    "red",
  ]

  return (
    <div className="todo__header">
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
    </div>
  );
}

export default TodoHeader;