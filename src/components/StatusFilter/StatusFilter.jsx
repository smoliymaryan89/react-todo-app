import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "../../store/filters/selectors";
import { setStatusFilter } from "../../store/filters/filtersSlice";
import { statusFilters } from "../../store/constants";
import Button from "../Button/Button";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
