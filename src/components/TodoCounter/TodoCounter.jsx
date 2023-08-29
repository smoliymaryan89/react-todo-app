import { useSelector, useDispatch } from "react-redux";
import { selectTodoCount, selectTodos } from "../../store/todos/selectors";
import { deleteCompletedTodo } from "../../store/todos/todosSlice";

const TodoCounter = () => {
  const dispatch = useDispatch();
  const activeTodo = useSelector(selectTodoCount);
  const todo = useSelector(selectTodos);

  return (
    todo.length > 0 && (
      <div className="container mb-4">
        <div className="flex justify-between py-4 px-5 bg-white">
          <p className="text-xs text-secondary tracking-[-0.167px] md:text-[14px] md:tracking-[-0.194px]">
            {activeTodo} items left
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteCompletedTodo())}
            className="text-xs text-secondary tracking-[-0.167px] md:text-[14px] md:tracking-[-0.194px] hover:text-primary"
          >
            Clear Completed
          </button>
        </div>
      </div>
    )
  );
};

export default TodoCounter;
