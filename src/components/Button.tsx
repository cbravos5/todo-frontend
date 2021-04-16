import React from "react";

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => (
  <button type="button" className="btn btn-lg btn-primary">
    {children}
  </button>
);

export default Button;
