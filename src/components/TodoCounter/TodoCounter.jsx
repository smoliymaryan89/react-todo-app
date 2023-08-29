import { useSelector, useDispatch } from "react-redux";
import { selectTodoCount } from "../../store/todos/selectors";
import { deleteCompletedTodo } from "../../store/todos/todosSlice";

const TodoCounter = () => {
  const dispatch = useDispatch();
  const activeTodo = useSelector(selectTodoCount);

  return (
    <div>
      <p>{activeTodo} items left</p>
      <button type="button" onClick={() => dispatch(deleteCompletedTodo())}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoCounter;
