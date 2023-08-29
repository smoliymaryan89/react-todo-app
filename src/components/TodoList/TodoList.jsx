import { useSelector } from "react-redux";
import { selectVisibleTodos } from "../../store/filters/selectors";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector(selectVisibleTodos);

  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem key={id} id={id} text={text} completed={completed} />
      ))}
    </ul>
  );
};

export default TodoList;
