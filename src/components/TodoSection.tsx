import React from "react";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  children?: React.ReactNode;
}

const TodoSection: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default TodoSection;
