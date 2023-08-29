import { useDispatch } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addTodo } from "../../store/todos/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.elements.text.value.trim()) return;

    dispatch(addTodo(form.elements.text.value.trim()));
    form.reset();
  };

  return (
    <div className="container pb-4 md:pb-6">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          name="text"
          placeholder="Create a new todo..."
          className="rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,_195,_214,_0.50)] outline-none w-full py-[18px] md:py-[23px] pl-14 placeholder:text-secondary placeholder:text-xs pl-18 text-[#393A4B] md:placeholder:text-lg tracking-tight"
        />
        <button
          type="submit"
          className="absolute top-[20px] left-5 flex items-center content-center md:top-[22px] md:left-6"
        >
          <IoIosAddCircleOutline className="text-[20px] md:text-[24px] text-[#E3E4F1]" />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
