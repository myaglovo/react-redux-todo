import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.todos.push({
        id: new Date().getTime(),
        text: action.payload.text,
        completed: true,
      });
    },
    removeTodo: (state, action) => {},
    toggleTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
