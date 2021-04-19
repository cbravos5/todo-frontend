import React from "react";
import { MdClose } from "react-icons/md";

const TodoForm = (): React.ReactNode => {
  const handleInput = () => {
    console.log("Sent");
  };

  return (
    <div className="form-container">
      <div className="close-btn">
        <MdClose />
      </div>
      <form onSubmit={handleInput}>
        <label htmlFor="title">Title</label>
        <input type="text" required />
        <label htmlFor="description">Description</label>
        <input type="textarea" />
        <label htmlFor="deadline">Deadline</label>
        <input type="date" />
        <button type="submit" className="btn btn-success">
          add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
