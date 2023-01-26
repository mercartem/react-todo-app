import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <>
        <h1>Todo App</h1>
        <TodoForm setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </>
    </div>
  );
}

export default App;
