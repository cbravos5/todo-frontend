export interface IColumn {
  id: string;
  title: string;
  todoIds: string[];
  color: string;
}

export interface ITodo {
  id: string;
  content: string;
}

export interface IData {
  todos: {
    [propName: string]: ITodo;
  };
  columns: {
    [propName: string]: IColumn;
  };
  columnOrder: string[];
}

const data: IData = {
  todos: {
    "todo-1": { id: "todo-1", content: "Teste 1" },
    "todo-2": { id: "todo-2", content: "Teste 2" },
    "todo-3": { id: "todo-3", content: "Teste 3" },
    "todo-4": { id: "todo-4", content: "Teste 4" },
    "todo-5": { id: "todo-5", content: "Teste 5" },
    "todo-6": { id: "todo-6", content: "Teste 6" },
  },
  columns: {
    Pending: {
      id: "Pending",
      title: "Pending",
      todoIds: ["todo-1", "todo-2", "todo-3", "todo-4"],
      color: "warning",
    },
    Completed: {
      id: "Completed",
      title: "Completed",
      todoIds: [],
      color: "success",
    },
  },
  columnOrder: ["Pending", "Completed"],
};

export default data;
