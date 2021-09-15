import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './bootstrap5.1.0.min.css';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo"
    >
      {todo.text}
      <div>
        <Button variant="outline-primary" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? 'Revert' : 'Done'}
        </Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          x
        </Button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Study react hook',
      isCompleted: false,
    },
    {
      text: 'Meet friend for brunch',
      isCompleted: false,
    },
    {
      text: 'Get groceries',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
