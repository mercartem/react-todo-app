import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ index, todo, deleteTodo }) => {
  return (
    <li onDoubleClick={() => deleteTodo(index)} className={styles.li}>
      <RiTodoFill className={styles.todoIcon} />
      {todo}
    </li>
  );
};

export default Todo;
