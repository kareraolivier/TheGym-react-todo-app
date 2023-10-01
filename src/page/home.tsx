import { useState, useEffect } from "react";
import Todos from "../components/todos";
import InputForm from "../components/input.form";
import { nanoid } from "nanoid";
import { todoType } from "../components/types/todo.type";
const Home = () => {
  const initialTodos: todoType[] = JSON.parse(
    localStorage.getItem("todos") || "[]"
  );
  const [todos, setTodos] = useState(initialTodos);
  const [formData, setFormData] = useState({ todo: "" });

  const hundleChange = (event: { target: { name: string; value: string } }) => {
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const createTodos = (): todoType => {
    return { id: nanoid(), todo: formData.todo, isActive: true };
  };

  const submitForm = () => {
    setTodos((previous: todoType[]) => [createTodos(), ...previous]);
    setFormData({ todo: "" });
  };

  const onDeleteDoto = (todoId: string) => {
    setTodos((previous: todoType[]) =>
      previous.filter((element) => element.id !== todoId)
    );
  };
  const checkTodo = (todoId: string) => {
    setTodos((previous: todoType[]) =>
      previous.map((element) =>
        element.id === todoId
          ? { ...element, isActive: !element.isActive }
          : element
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center w-full sm:w-1/2">
        <p className="font-bold text-green-500 sm:text-8xl text-3xl">Todos</p>
        <InputForm
          hundleChange={hundleChange}
          submitForm={submitForm}
          formData={formData.todo}
        />
        <Todos
          todos={todos}
          onDeleteDoto={onDeleteDoto}
          checkTodo={checkTodo}
        />
      </div>
    </>
  );
};

export default Home;
