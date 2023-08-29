import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "../constants";
import { selectTodos } from "../todos/selectors";

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectStatusFilter],
  (todos, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return todos.filter((todo) => !todo.completed);
      case statusFilters.completed:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
);
