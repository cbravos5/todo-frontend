import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdRemoveRedEye, MdModeEdit, MdDelete } from "react-icons/md";

interface ITodo {
  id: string;
  content: string;
}

interface Props {
  todo: ITodo;
  index: number;
}

const Todo: React.FC<Props> = ({ todo, index }) => {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="todo-wrapper"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
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
            <h3>{todo.content}</h3>
          </div>
          <div
            className={`drag-pin ${snapshot.isDragging && "dragging"}`}
            {...provided.dragHandleProps}
          >
            <i></i>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
