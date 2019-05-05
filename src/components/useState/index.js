import React from "react";
import { StateCtx } from "./context";

export const TestApp2 = () => {
  const { color, text, changeColor, changeText } = React.useContext(StateCtx);
  console.log("parent:: ");

  return (
    <div>
      <h4 style={{ color }}>{text}</h4>
      <Btns changeColor={changeColor} changeText={changeText} />
    </div>
  );
};

const Btns = React.memo(({ changeColor, changeText }) => {
  console.log("hello child");
  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
});
