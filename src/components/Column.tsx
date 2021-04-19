import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";

interface IColumn {
  id: string;
  title: string;
  todoIds: string[];
  color: string;
}

interface ITodos {
  id: "todo-1";
  content: "Teste 1";
}

interface Props {
  column: IColumn;
  todos: ITodos[];
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
