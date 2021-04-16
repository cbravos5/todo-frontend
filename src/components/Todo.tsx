import React from "react";
import { MdRemoveRedEye, MdModeEdit, MdDelete } from "react-icons/md";

interface Props {
  title: string;
}

const Todo: React.FC<Props> = ({ title }) => {
  return (
    <div className="todo-wrapper">
      <div className="todo-actions">
        <button className="btn-blue">
          <MdRemoveRedEye />
        </button>
        <button className="btn-gray">
          <MdModeEdit />
        </button>
        <button className="btn-red">
          <MdDelete />
        </button>
      </div>
      <div className="todo-title">
        <h3>{title}</h3>
      </div>
      <div className="drag-pin">
        <i></i>
      </div>
    </div>
  );
};

export default Todo;
