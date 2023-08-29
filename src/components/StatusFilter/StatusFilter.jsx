import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "../../store/filters/selectors";
import { setStatusFilter } from "../../store/filters/filtersSlice";
import { statusFilters } from "../../store/constants";
import { selectTodos } from "../../store/todos/selectors";
import Button from "../Button/Button";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const todo = useSelector(selectTodos);

  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    todo.length > 0 && (
      <div className="container">
        <div className="flex gap-[19px] items-center justify-center py-[15px] bg-white rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,_195,_214,_0.50)]">
          <Button
            className={`text-[14px]  tracking-[-0.194px] font-bold ${
              filter === statusFilters.all ? " text-blue-600" : "text-secondary"
            }`}
            selected={filter === statusFilters.all}
            onClick={() => handleFilterChange(statusFilters.all)}
          >
            All
          </Button>
          <Button
            className={`text-[14px] tracking-[-0.194px] font-bold ${
              filter === statusFilters.active
                ? "text-blue-600"
                : "text-secondary"
            }`}
            selected={filter === statusFilters.active}
            onClick={() => handleFilterChange(statusFilters.active)}
          >
            Active
          </Button>
          <Button
            className={`text-[14px] tracking-[-0.194px] font-bold ${
              filter === statusFilters.completed
                ? "text-blue-600"
                : "text-secondary"
            }`}
            selected={filter === statusFilters.completed}
            onClick={() => handleFilterChange(statusFilters.completed)}
          >
            Completed
          </Button>
        </div>
      </div>
    )
  );
};

export default StatusFilter;
