import { useSelector } from "react-redux";
import { selectTodoCount } from "../../store/todos/selectors";

const TodoCounter = () => {
  const activeTodo = useSelector(selectTodoCount);

  return (
    <div>
      <p>{activeTodo} items left</p>
    </div>
  );
};

export default TodoCounter;
