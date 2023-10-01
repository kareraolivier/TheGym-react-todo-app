import { SiAddthis } from "react-icons/si";
import { todoInputType } from "./types/todo.type";
const InputForm = ({ hundleChange, submitForm, formData }: todoInputType) => {
  return (
    <div className="w-full">
      <form>
        <div className="bg-gray-100 border-none shadow-lg rounded-3xl py-5 flex justify-center align-middle border my-8 px-4 border-black">
          <input
            type="text"
            name="todo"
            value={formData}
            onChange={hundleChange}
            className="w-full outline-none text-xl text-gray-600 bg-gray-100"
            placeholder="Enter the todos"
          />
          <button type="button" onClick={submitForm}>
            <SiAddthis className="text-3xl text-green-600 hover:shadow-lg" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
