import { React, useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [title, setTitle] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    if (title.trim()) {
      dispatch(addNewTodo({ title }));
      setTitle("");
    } else {
      alert("Введите текст!");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app">
      <InputField text={title} handleInput={setTitle} handleSubmit={addTask} />
      {status === "pending" && <h2>Загрузка...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
