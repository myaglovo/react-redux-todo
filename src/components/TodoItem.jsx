import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/todoSlice";

const TodoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();

  return (
    <li id={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus({ id }))}
      />
      <span>{title}</span>
      <span
        onClick={() => dispatch(deleteTodo({ id }))}
        style={{ color: "red", cursor: " pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
