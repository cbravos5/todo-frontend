import React, { useState } from 'react';
import { format } from 'date-fns';
import { MdClose } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { useGlobalContext } from '../context';

const formatDate = (date: string | undefined) => {
  if (!date) {
    return null;
  }
  let [M, D, Y]: string[] | number[] = date.split('/');
  M = parseInt(M) - 1;
  D = parseInt(D);
  Y = parseInt(Y);

  return new Date(Y, M, D);
};

const TodoForm: React.FC<Record<string, never>> = () => {
  const { state, setState, setShowForm, todoId = '' } = useGlobalContext();

  const currentTodo = state.todos[todoId];
  const [todoTitle, todoDescription, todoDeadline] = todoId
    ? [
        currentTodo.title,
        currentTodo.description,
        formatDate(currentTodo.deadline),
      ]
    : ['', '', null];

  const [title, setTitle] = useState(todoTitle);
  const [description, setDescription] = useState(todoDescription);
  const [deadline, setDeadline] = useState<Date | [Date, Date] | null>(
    todoDeadline,
  );

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: title,
      title,
      description,
      deadline: format(deadline as Date, 'MM/dd/yyyy'),
      columnId: 'Pending',
    };

    if (!currentTodo) {
      const hasTodo = state.todos[newTodo.id];

      if (hasTodo) {
        console.log('A Todo with this title already exists');
        return;
      }
    }

    const newState = { ...state };

    if (currentTodo) {
      newTodo.id = currentTodo.id;
      newTodo.columnId = currentTodo.columnId;
    }

    newState.todos[newTodo.id] = newTodo;

    if (!currentTodo) {
      newState.columns.Pending.todoIds.push(newTodo.id);
    }

    setState(newState);
    setShowForm(false);
  };

  return (
    <div className="form-container">
      <div className="close-btn">
        <MdClose size={25} onClick={() => setShowForm(false)} />
      </div>
      <form onSubmit={handleInput} className="form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            maxLength={35}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            maxLength={120}
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <DatePicker
            selected={deadline as Date}
            onChange={(date) => setDeadline(date)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          {currentTodo ? 'update' : 'add'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
