import { useContext, useState } from "react";
import { TodoContext } from "../context/ToDoContext";

export const useTodos = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [filter, setFilter] = useState("ALL");

  const filteredTodos = state.todos.filter(todo => {
    if (filter === "DONE") return todo.completed;
    if (filter === "ACTIVE") return !todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    dispatch,
    setFilter,
  };
};