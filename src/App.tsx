import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./components/Column";
import "./styles/page.css";
import "./styles/todo.css";
import onDrop from "./onDrop";
import { useGlobalContext } from "./context";

const App = (): JSX.Element => {
  const { state, setState } = useGlobalContext();
  return (
    <>
      <div className="section">
        <p>Click to add a new ToDo</p>
        <button className="btn btn-lg btn-secondary">new</button>
      </div>
      <DragDropContext
        onDragEnd={(result: DropResult) => setState(onDrop(result, state))}
      >
        <div className="dnd-container">
          {state.columnOrder.map((columnId: string) => {
            const column = state.columns[columnId];
            const todos = column.todoIds.map(
              (todoId: string) => state.todos[todoId],
            );
            return <Column key={column.id} column={column} todos={todos} />;
          })}
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
