import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Button from "./components/Button";
import Column from "./components/Column";
import "./styles/page.css";
import "./styles/todo.css";
import data from "./data";

class App extends React.Component {
  state = data;

  onDragEnd = (result: DropResult) => {
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

    const column = this.state.columns[source.droppableId];
    const newTodoIds = Array.from(column.todoIds);
    newTodoIds.splice(source.index, 1);
    newTodoIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
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
  };

  render() {
    return (
      <>
        <div className="section">
          <p>Click to add a new ToDo</p>
          <Button>new</Button>
        </div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="dnd-container">
            <Column
              column={this.state.columns["column-1"]}
              color="warning"
              todos={this.state.todos}
            />
          </div>
        </DragDropContext>
      </>
    );
  }
}

export default App;
