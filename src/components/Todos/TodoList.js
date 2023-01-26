import styles from './TodoList.module.css';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return todos.length ? (
    <ul className={styles.ul}>
      {todos.map((todo, i) => (
        <Todo key={i} index={i} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  ) : (
    <h2>Todo list is empty</h2>
  );
};

export default TodoList;
