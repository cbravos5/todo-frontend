import React from "react";
import Button from "./components/Button";
import Todo from "./components/Todo";
import TodoSection from "./components/TodoSection";
import "./styles/page.css";
import "./styles/todo.css";

function App() {
  return (
    <>
      <div className="section">
        <p>Click to add a new ToDo</p>
        <Button>new</Button>
      </div>
      <div className="dnd-container">
        <TodoSection secName="Pending" color="warning">
          <Todo title="Make a Todo" />
        </TodoSection>

        <TodoSection secName="Completed" color="success"></TodoSection>
      </div>
    </>
  );
}

export default App;
