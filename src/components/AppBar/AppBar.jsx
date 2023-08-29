import TodoForm from "../TodoForm/TodoForm";

const AppBar = () => {
  return (
    <div className="bg-slate-500">
      <div className="container">
        <h1 className="text-xl font-bold tracking-[15px] text-white">TODO</h1>
        <span>
          <b>Switcher</b>
        </span>
      </div>
      <TodoForm />
    </div>
  );
};

export default AppBar;
