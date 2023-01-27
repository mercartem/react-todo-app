import styles from './TodoList.module.css';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  return (
    <ul className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </ul>
  );
};

export default TodoList;
