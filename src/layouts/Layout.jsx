import AppBar from "../components/AppBar/AppBar";
import StatusFilter from "../components/StatusFilter/StatusFilter";
import TodoList from "../components/TodoList/TodoList";
import TodoCounter from "../components/TodoCounter/TodoCounter";

const Layout = () => {
  return (
    <>
      <AppBar />
      <TodoList />
      <TodoCounter />
      <StatusFilter />
    </>
  );
};

export default Layout;
