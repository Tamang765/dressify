import React, { useReducer, useState } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { title: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
}
function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const handleToggleTodo = index => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const handleDeleteTodo = index => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(index)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;