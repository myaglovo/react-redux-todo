import { React, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
  };

  // const removeTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const toggleTodoCompleted = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== id) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     })
  //   );
  // };

  return (
    <div className="app">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
