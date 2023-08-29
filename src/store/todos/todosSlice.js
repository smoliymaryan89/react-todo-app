import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    deleteTodo(state, { payload }) {
      const index = state.findIndex((todo) => todo.id === payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, { payload }) {
      for (const todo of state) {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
          break;
        }
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
