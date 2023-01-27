import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      {!!todos.length && (
        <TodosActions
          setTodos={setTodos}
          todos={todos}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList setTodos={setTodos} todos={todos} />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
