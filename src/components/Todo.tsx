import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdRemoveRedEye, MdModeEdit, MdDelete } from "react-icons/md";
import { ITodo } from "../data";

interface Props {
  todo: ITodo;
  index: number;
}

const Todo: React.FC<Props> = ({ todo, index }) => {
  const [showInfo, setShowInfo] = useState(false);
  const heightStyle = showInfo ? "15em" : "85px";

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="todo-wrapper"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="todo-main">
            <div className="todo-actions">
              <button
                className="btn-blue"
                onClick={() => setShowInfo(!showInfo)}
              >
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
              <h3>{todo.title}</h3>
            </div>
            <div
              className={`drag-pin ${snapshot.isDragging && "dragging"}`}
              {...provided.dragHandleProps}
            >
              <i></i>
            </div>
          </div>
          <hr />
          <div
            className="todo-info"
            style={showInfo ? { maxHeight: "15em" } : { maxHeight: 0 }}
          >
            <h3>Description</h3>
            <h3>Deadline</h3>
            <p>{todo.description}</p>
            <p>{todo.deadline}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
