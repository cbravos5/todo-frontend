import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Button from "./components/Button";
import Column from "./components/Column";
import "./styles/page.css";
import "./styles/todo.css";
import data from "./data";

class App extends React.Component {
  state = data;

  onDragEnd = (result: DropResult): void => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTodoIds = Array.from(start.todoIds);
      newTodoIds.splice(source.index, 1);
      newTodoIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        todoIds: newTodoIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startTodoIds = Array.from(start.todoIds);
    startTodoIds.splice(source.index, 1);
    const newStart = {
      ...start,
      todoIds: startTodoIds,
    };

    const finishTodoIds = Array.from(finish.todoIds);
    finishTodoIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      todoIds: finishTodoIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render(): React.ReactNode {
    return (
      <>
        <div className="section">
          <p>Click to add a new ToDo</p>
          <Button>new</Button>
        </div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="dnd-container">
            {this.state.columnOrder.map((columnId: string) => {
              const column = this.state.columns[columnId];
              const todos = column.todoIds.map(
                (todoId: string) => this.state.todos[todoId],
              );
              return <Column key={column.id} column={column} todos={todos} />;
            })}
          </div>
        </DragDropContext>
      </>
    );
  }
}

export default App;
