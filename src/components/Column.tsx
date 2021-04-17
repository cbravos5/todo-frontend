import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import TodoSection from "./TodoSection";

interface IColumn {
  id: string;
  title: string;
  todoIds: string[];
}

interface ITodos {
  [propName: string]: {
    id: string;
    content: string;
  };
}

interface Props {
  column: IColumn;
  todos: ITodos;
  color: string;
}

const Column: React.FC<Props> = ({ column, todos, color }) => {
  const borderColor = `bd-${color}`;
  const columnTodos = column.todoIds.map(todoId => todos[todoId]);

  return (
    <div className={`section-todo ${borderColor}`}>
      <div className={`section-tag ${borderColor}`}>
        <h1>{column.title}</h1>
      </div>
      <Droppable droppableId={column.id}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {columnTodos.map((todo, index) => (
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
