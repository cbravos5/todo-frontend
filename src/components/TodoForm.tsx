import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";
import { useGlobalContext } from "../context";

const TodoForm: React.FC<Record<string, never>> = () => {
  const { state, setState, setShowForm } = useGlobalContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<Date | [Date, Date] | null>(null);

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = { id: title, content: title };

    const hasTodo = state.todos[newTodo.id];

    if (hasTodo) {
      console.log("A Todo with this title already exists");
      return;
    }

    const newState = { ...state };

    newState.todos[newTodo.id] = newTodo;
    newState.columns.Pending.todoIds.push(newTodo.id);

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
          add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
