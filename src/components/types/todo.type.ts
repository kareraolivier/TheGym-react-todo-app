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
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
  formData: string;
  isButtonDisabled: boolean;
}
