import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

const TodosActions = ({ completedTodosExist, setTodos, todos }) => {
  const resetTodos = () => {
    setTodos([]);
  };
  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
