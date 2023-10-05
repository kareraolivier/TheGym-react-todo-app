export interface todoType {
  id: string;
  todo: string;
  isActive: boolean;
}

export interface todoPropertyType {
  todos: todoType[];
  onDeleteDoto: (todoId: string) => void;
  checkTodo: (todoId: string) => void;
}

export interface todoInputType {
  handleChange: (event: { target: { name: string; value: string } }) => void;
  submitForm: () => void;
  formData: string;
  isButtonDisabled: boolean;
}
