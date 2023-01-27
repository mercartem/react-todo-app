import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = ({ setTodos, todos }) => {
  const [text, setText] = useState('');
  const addTodo = (event) => {
    const newTodo = {
      text,
      isCpmpleted: false,
      id: uuidv4(),
    };
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setText('');
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={addTodo}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter new todo"
          value={text}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
