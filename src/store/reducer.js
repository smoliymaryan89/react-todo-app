import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todosSlice";
import { filtersReducer } from "./filters/filtersSlice";

export const reducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
