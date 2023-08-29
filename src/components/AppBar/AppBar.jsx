import TodoForm from "../TodoForm/TodoForm";

const AppBar = () => {
  return (
    <div className="bg-slate-500">
      <div className="container">
        <div className="flex justify-between items-center pt-12 pb-10">
          <h1 className="text-xl font-bold tracking-[15px] text-white md:text-[40px]">
            TODO
          </h1>
          <span>
            <b>Switcher</b>
          </span>
        </div>
      </div>
      <TodoForm />
    </div>
  );
};

export default AppBar;
