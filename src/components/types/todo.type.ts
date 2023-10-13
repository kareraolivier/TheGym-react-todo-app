export interface Todo {
  id: string;
  todo: string;
  isActive: boolean;
}

export interface Todoprop {
  todos: Todo[];
  onDeleteTodo: (todoId: string) => void;
  checkTodo: (todoId: string) => void;
}

export interface Inputprop {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
  formData: string;
  isButtonDisabled: boolean;
}
