import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice";

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  return (
    <li id={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <span>{text}</span>
      <span
        onClick={() => dispatch(removeTodo({ id }))}
        style={{ color: "red", cursor: " pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
