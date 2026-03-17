export const initialState = {
  todos: [],
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
}