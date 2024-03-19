import { ResizableBox } from "react-resizable";
import React from "react";
import "./resizable.scss";

function Resizable({ children }) {
  return (
    <ResizableBox
      height={window.innerHeight / 2}
      width={window.innerWidth}
      resizeHandles={["s", "e", "n", "w"]}
    >
      {children}
    </ResizableBox>
  );
}

export default Resizable;
