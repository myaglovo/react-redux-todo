import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodoCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          removeTodo={removeTodo}
          toggleTodoCompleted={toggleTodoCompleted}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
