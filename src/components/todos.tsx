import { RiDeleteBin7Line } from "react-icons/ri";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";
import { todoType, todoPropertyType } from "./types/todo.type";
const Todos = ({ todos, onDeleteDoto, checkTodo }: todoPropertyType) => {
  return (
    <div className="w-full">
      {todos.map((todo: todoType) => (
        <div
          key={todo.id}
          className="flex justify-between items-center shadow-sm shadow-green-100 py-2 px-2"
        >
          <div onClick={() => checkTodo(todo.id)} className="p-2 w-1/12  ">
            {todo.isActive ? (
              <BsCheckSquare className="cursor-pointer text-2xl text-green-600" />
            ) : (
              <BsCheckSquareFill className="cursor-pointer text-2xl text-green-600" />
            )}
          </div>
          <div className="w-5/6 p-2">
            <p
              className={`${
                todo.isActive ? "" : "text-red-500 line-through "
              } "text-xl text-gray-600 cursor-pointer"`}
            >
              {todo.todo}
            </p>
          </div>

          <div onClick={() => onDeleteDoto(todo.id)} className="p-2 w-1/12 ">
            <RiDeleteBin7Line className="cursor-pointer text-3xl text-red-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
