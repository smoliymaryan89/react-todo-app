import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTodo, toggleCompleted } from "../../store/todos/todosSlice";
import { RxCross1 } from "react-icons/rx";
import { BsCheck } from "react-icons/bs";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li className="flex items-center first:rounded-t-[5px] shadow-[0px_35px_50px_-15px_rgba(194,_195,_214,_0.50)] outline-none w-full border-b border-[#E3E4F1] bg-white px-5 py-4 md:px-6 md:py-5">
      <label className="flex items-center content-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
          className="appearance-none"
        />
        <span
          className={`w-5 h-5 md:w-6 md:h-6  rounded-full border-2  border-[#E3E4F1] flex justify-center items-center mr-3 relative ${
            completed &&
            "bg-gradient-to-br from-blue-300 to-purple-500 border-none"
          }`}
        >
          {completed ? (
            <BsCheck className="absolute text-xl text-white" />
          ) : null}
        </span>
      </label>
      <p
        className={`text-xs tracking-tight md:text-lg ${
          completed && "text-light-grey line-through"
        }`}
      >
        {text}
      </p>
      <button type="button" className="ml-auto" onClick={handleDelete}>
        <RxCross1 className="text-[12px] md:text-[18px]" />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
