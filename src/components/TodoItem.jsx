import React from "react";

const TodoItem = ({ id, completed, text, removeTodo, toggleTodoCompleted }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span>{text}</span>
      <span
        onClick={() => removeTodo(id)}
        style={{ color: "red", cursor: " pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
