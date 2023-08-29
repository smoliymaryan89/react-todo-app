import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todos/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTodo(form.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Create a new todo..." />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoForm;
