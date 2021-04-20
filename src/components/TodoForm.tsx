import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";
import { useGlobalContext } from "../context";

const TodoForm: React.FC<Record<string, never>> = () => {
  const { setShowForm } = useGlobalContext();

  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(
    new Date(),
  );

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sent");
  };

  return (
    <div className="form-container">
      <div className="close-btn">
        <MdClose size={25} onClick={() => setShowForm(false)} />
      </div>
      <form onSubmit={handleInput} className="form">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" required maxLength={35} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea maxLength={120} rows={3} />
        </div>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <DatePicker
            selected={startDate as Date}
            onChange={(date) => setStartDate(date)}
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
