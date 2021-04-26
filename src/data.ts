export interface IColumn {
  id: string;
  title: string;
  todoIds: string[];
  color: string;
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  deadline: string;
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
    'todo-1': {
      id: 'todo-1',
      title: 'Teste 1',
      description: 'ashodohsdahosadohiasiohasdoih',
      deadline: '',
    },
    'todo-2': {
      id: 'todo-2',
      title: 'Teste 2',
      description: 'saiooidsasoidaisdjiads ijoasdijoidaosjiodsjiadoi',
      deadline: '04/28/2021',
    },
  },
  columns: {
    Pending: {
      id: 'Pending',
      title: 'Pending',
      todoIds: ['todo-1', 'todo-2'],
      color: 'warning',
    },
    Completed: {
      id: 'Completed',
      title: 'Completed',
      todoIds: [],
      color: 'success',
    },
  },
  columnOrder: ['Pending', 'Completed'],
};

export default data;
