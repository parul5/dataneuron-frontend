import React from "react";
import "./window.scss";
import Resizable from "../Resizable";
function Window({ className, children }) {
  return (
    <Resizable>
      <div className={`window ${className}`} id={className}>
        <p>{children}</p>
      </div>
    </Resizable>
  );
}

export default Window;
