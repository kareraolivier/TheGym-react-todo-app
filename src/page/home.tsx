import { useState, useEffect } from "react";
import Todos from "../components/todos";
import InputForm from "../components/input.form";
import { nanoid } from "nanoid";
import { Todo } from "../components/types/todo.type";
const Home = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [formData, setFormData] = useState({ todo: "" });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
    setIsButtonDisabled(event.target.value.trim() === "");
  };

  const createTodos = (): Todo => {
    return {
      id: nanoid(),
      todo: formData.todo,
      isActive: true,
    };
  };

  const submitForm = () => {
    setTodos((previous) => [createTodos(), ...previous]);
    setFormData({ todo: "" });
    setIsButtonDisabled(true);
  };

  const onDeleteTodo = (todoId: string) => {
    setTodos((previous) => previous.filter((element) => element.id !== todoId));
  };
  const checkTodo = (todoId: string) => {
    setTodos((previous) =>
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
          handleChange={handleChange}
          submitForm={submitForm}
          formData={formData.todo}
          isButtonDisabled={isButtonDisabled}
        />
        <Todos
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          checkTodo={checkTodo}
        />
      </div>
    </>
  );
};

export default Home;
