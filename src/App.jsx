import { React, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime(),
          text: text,
          completed: false,
        },
      ]);
    }
    setText("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="app">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    </div>
  );
}

export default App;
