import React from "react";

interface Props {
  secName: string;
  color: string;
  children?: React.ReactNode;
}

const TodoSection: React.FC<Props> = ({ secName, children, color }) => {
  const borderColor = `bd-${color}`;

  return (
    <section className={`section-todo ${borderColor}`}>
      <div className={`section-tag ${borderColor}`}>
        <h1>{secName}</h1>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default TodoSection;
