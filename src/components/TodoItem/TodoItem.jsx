import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../../store/todos/todosSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(id));
  const handleDelete = () => dispatch(deleteTodo(id));
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <p>{text}</p>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
