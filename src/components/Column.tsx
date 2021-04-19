import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import { ITodo, IColumn } from "../data";

interface Props {
  column: IColumn;
  todos: ITodo[];
}

const Column: React.FC<Props> = ({ column, todos }) => {
  const borderColor = `bd-${column.color}`;

  return (
    <div className={`section-todo ${borderColor}`}>
      <div className={`section-tag ${borderColor}`}>
        <h1>{column.title}</h1>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
