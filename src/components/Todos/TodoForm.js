import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

const TodoForm = ({ setTodos, todos }) => {
  const [text, setText] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, text]);
    setText('');
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter new todo"
        value={text}
      />
      <Button type="submit" />
    </form>
  );
};

export default TodoForm;
