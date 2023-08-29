import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [];

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
